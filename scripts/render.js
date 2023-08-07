const skillsDiv = document.getElementById("skills-container");
const galleryDiv = document.getElementById("gallery");
const skillinfoDiv = document.getElementById("skill-info");
const about1 = document.getElementById("about-1");
const about2 = document.getElementById("about-me");

function render() {
  // carrousel
  var res = ``;
  for (let index = 0; index < 10; index++) {
    res += carrousel();
  }
  slidetrack.innerHTML = `${res}`;
  // skills
  skillsDiv.innerHTML = "";
  db.skills.forEach((skill) => {
    skillsDiv.innerHTML += `<button id="btn-skills-info" class="btn-common">${skill.name}</button>`;
  });
  //description DISABLED
  // const botones = document.querySelectorAll("#btn-skills-info");

  // botones.forEach((boton) => {
  //   boton.addEventListener("click", () => {
  //     const skillname = db.skills.find(
  //       (skill) => skill.name === boton.textContent
  //     );

  //     if (skillname) {
  //       skillinfoDiv.innerHTML = `${skillname.description}`;
  //       skillname.state = true;

  //       resetButtonState();
  //     }
  //   });
  // });

  //projects
  const projects = getCurrentProjects();
  const firstProject = projects[0];
  if (!firstProject) {
    return;
  }

  galleryDiv.innerHTML = `
        <div class="img-one d-flex-p-b" style="background-image: url('${
          firstProject.img
        }')";>
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
    let result = ``;
    if(data.skills)
      data.skills.forEach((item) => {
        result += `<button class="btn-common">${item}</button>\n`;
      })
    return result;
  }
  const projectsDiv = document.getElementById("projects-container");
  const secondzone = projects.slice(1, 3);

  secondzone.forEach((project) => {
    projectsDiv.innerHTML += `
    <div class="full-height d-flex-p-b" style="background-image: url('${
      project.img
    }')";>
        <a class="btona"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        <div class="section-project">
            <h3>${project.name}</h3>
            ${print_languages(project)}
        </div>
    </div>`;
  });
  //about

  about1.innerHTML = `${db.about[0].about1}`
  about2.innerHTML = `${db.about[0].about2}`
}

document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed("#dev-text", {
    strings: ["Developer.", "Creator.", "Designer."],
    typeSpeed: 50,
    loop: true,
  });
});
