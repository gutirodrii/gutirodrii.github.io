const backendUrl = "http://127.0.0.1:5500";

var projectIndex = 0;
function getCurrentProjects() {
  return db.projects.slice(projectIndex, projectIndex + 3);
}
function nextProject() {
  projectIndex++;
  if (projectIndex > db.projects.length - 3) {
    projectIndex = 0;
  }
  render();
}

// FUNCION LOAD CON PROMESA

// function load() {
//   const url = `${backendUrl}/assets/db.json`;
//   const promise = fetch(url);

//   promise
//     .then((response) => response.json())
//     .then((mydb) => {
//       db = mydb;
//       render();
//     });
// }

// FUNCION LOAD CON ASYNC

async function load() {
  const url = `${backendUrl}/assets/db.json`;
  const response = await fetch(url);
  const result = await response.json();
  db = result;
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  setInterval(nextProject, 2000);
});
