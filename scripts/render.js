const skillsDiv = document.getElementById("skills-container");
const galleryDiv = document.getElementById("gallery");

function render() {
  // skills
  skillsDiv.innerHTML = "";
  db.skills.forEach((skill) => {
    skillsDiv.innerHTML += `<button class="btn-common">${skill.name}</button>`;
  });
  //projects
  const projects = getCurrentProjects();
  const firstProject = projects[0];
  if (!firstProject) {
    return;
  }
  galleryDiv.innerHTML = `
        <div class="img-one d-flex-p-b">
                <a class="btona"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <div class="section-project">
                    <h3>${firstProject.name}</h3>
                    ${print_languages(firstProject)}
                </div>
            </div>
            <div class="half-width" id="projects-container">
                
            </div>
  `;
  function print_languages(data) {
    let result = "";
    data.skills.forEach((item) => {
      result += `<button class="btn-common">${item}</button>\n`;
    });
    return result;
  }
  const projectsDiv = document.getElementById("projects-container");
  const secondzone = projects.slice(1, 3);
  secondzone.forEach((project) => {
    projectsDiv.innerHTML += `
    <div class="full-height d-flex-p-b">
        <a class="btona"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        <div class="section-project">
            <h3>${project.name}</h3>
            ${print_languages(project)}
        </div>
    </div>`;
  });
}

document.addEventListener(("DOMContentLoaded"), ()=>{
    var typed = new Typed('#dev-text', {
        strings: ['Developer.', 'Creator.', 'Designer.'],
        typeSpeed: 50,
        loop:true
    });
});