const messageDiv = document.getElementById("welcome-message");
let username = localStorage.getItem("nombre");

document.addEventListener("DOMContentLoaded", () => {

  // NOMBRE OBLIGATORIO

  while (!username) {
    username = prompt("Cual es tu nombre?");
    if (username != null) {
      localStorage.setItem("nombre", username);
    }
  }
  messageDiv.innerHTML = `
        <h2>
        Hola, ${username}. Bienvenido a mi web!
        </h2>`;


  // PUEDE PASAR SIN NOMBRE

  // if (!username) {
  //   username = prompt("Cual es tu nombre?");
  // }
  // if (username != null && username != "") {
  //   localStorage.setItem("nombre", username);
  //   messageDiv.innerHTML = `
  //   <h2>
  //   Hola, ${username}. Bienvenido a mi web!
  //   <h2>
  //   `;
  // }
});
