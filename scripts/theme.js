const darkmode = document.getElementById('darkmode-toggle');
darkmode.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}
