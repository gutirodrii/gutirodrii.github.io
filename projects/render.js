const projectDiv = document.getElementById("project")

function render(){
    projectDiv.innerHTML = `<div>${db.project.name}</div>`
}