# by Guti

## Instalación

1. Clonar el repositorio
2. Crear un archivo `.env` en la raíz del proyecto con las credenciales de tu cuenta de MyIPTV
3. Instalar las dependencias con `pip install -r requirements.txt`
4. Ejecutar el servidor con `python app.py`

## Uso

Para acceder a la API, se utiliza el siguiente endpoint:

`http://localhost:5001/stream/<channel_id>`

Donde `<channel_id>` es el ID del canal que se desea reproducir.

Para obtener una lista de canales disponibles, se utiliza el siguiente endpoint:

`http://localhost:5001/playlist/<channel_id>`

Donde `<channel_id>` es el ID del canal que se desea reproducir.
