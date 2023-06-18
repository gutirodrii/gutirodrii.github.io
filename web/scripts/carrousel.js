const slidetrack = document.getElementById("slide-track");
const slide = document.getElementById("slide");

function carrousel() {
  var res = ``;
  db.carrousel.forEach((element) => {
    res += `
            <div class="slide">
                <p>${element.name}</p>
            </div>
            <div class="slide">
                <p class="color-green">*</p>
            </div>   
        `;
  });
  return res;
}
