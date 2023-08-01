const id = new URLSearchParams(window.location.search).get("id")
console.log(id)
const backendUrl = "https://portfolio-api-production-ff2e.up.railway.app"
async function loadProject(){
    const url = `${backendUrl}/projects/${id}`
    const response = await fetch(url)

    return await response.json()
}
async function load(){
    db.project = await loadProject()
    render()
}
document.addEventListener("DOMContentLoaded", () => {
    load();
  });