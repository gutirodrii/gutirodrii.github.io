from flask import Flask, Response, stream_with_context
import requests
import logging
from urllib.parse import urljoin
import m3u8
import threading
import time
import os

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class StreamManager:
    def __init__(self):
        self.active_streams = {}
        self.lock = threading.Lock()
        
    def get_or_create_stream(self, channel_id, credentials):
        with self.lock:
            if channel_id not in self.active_streams or \
               time.time() - self.active_streams[channel_id]['last_access'] > 300:  # 5 min timeout
                
                self.active_streams[channel_id] = {
                    'token': self._get_new_token(channel_id, credentials),
                    'last_access': time.time()
                }
            
            self.active_streams[channel_id]['last_access'] = time.time()
            return self.active_streams[channel_id]['token']
    
    def _get_new_token(self, channel_id, credentials):
        # Hacer la petición inicial para obtener el token
        base_url = "http://477479.testmyiptv.com/live"  # Reemplazar con la URL base real
        initial_url = f"{base_url}/{credentials['user']}/{credentials['pass']}/{channel_id}.ts"
        try:
            response = requests.get(initial_url, allow_redirects=True, stream=True, headers={"User-Agent": "libmpv", "Accept": "*/*", "Range": "bytes=0-", "Connection": "close", "Host": "477479.testmyiptv.com", "Icy-MetaData": "1"})
            response.raise_for_status()
            return response.url
        except Exception as e:
            logger.error(f"Error getting stream token for channel {channel_id}: {str(e)}")

stream_manager = StreamManager()

@app.route('/stream/<channel_id>')
def proxy_stream(channel_id):
    credentials = {
        'user': os.getenv('USER'),  # Configurar según necesidades
        'pass': os.getenv('PASSWORD')   # Configurar según necesidades
    }
    
    try:
        stream_url = stream_manager.get_or_create_stream(channel_id, credentials)
        print(stream_url)
        
        def generate():
            with requests.get(stream_url, stream=True) as r:
                for chunk in r.iter_content(chunk_size=8192):
                    if chunk:
                        yield chunk
        
        return Response(
            stream_with_context(generate()),
            content_type='video/mp2t',
            headers={
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache'
            }
        )
        
    except Exception as e:
        logger.error(f"Error streaming channel {channel_id}: {str(e)}")
        return str(e), 500

@app.route('/playlist/<channel_id>')
def get_playlist(channel_id):
    # Generar M3U8 playlist para el canal
    playlist_content = f"""#EXTM3U
#EXTINF:-1,Channel {channel_id}
https://gutiproxy.onrender.com/stream/{channel_id}
"""
    return Response(
        playlist_content,
        mimetype='application/vnd.apple.mpegurl',
        headers={'Content-Disposition': f'attachment; filename={channel_id}.m3u8'}
    )

if __name__ == '__main__':
    app.run()