// const backendUrl = "http://127.0.0.1:5500";
const backendUrl = "https://portfolio-api-production-ff2e.up.railway.app"

var projectIndex = 0;
function getCurrentProjects() {
  if(projectIndex > db.projects.length -3 ){
    return db.projects.slice(projectIndex, projectIndex + 3).concat(db.projects.slice(0, 3));
  }
  return db.projects.slice(projectIndex, projectIndex + 3);
}
function nextProject() {
  if(projectIndex > db.projects.length - 1){
    projectIndex = 0;
  }
  projectIndex++;
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

async function loadProjects(){
  const url = `${backendUrl}/projects`;
  const response = await fetch(url);

  return await response.json();
}
async function loadSkills(){
  const url = `${backendUrl}/skills`;
  const response = await fetch(url);

  return await response.json();
}

async function loadCarrousel(){
  const url = `${backendUrl}/carrousel`;
  const response = await fetch(url);

  return await response.json();

}
async function loadAbout(){
  const url = `${backendUrl}/about`;
  const response = await fetch(url);

  return await response.json();

}
async function load() {
  db.projects = await loadProjects();
  db.skills = await loadSkills();
  db.carrousel = await loadCarrousel();
  db.about = await loadAbout();

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  setInterval(nextProject, 2000);
});
