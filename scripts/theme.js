const darkmode = document.getElementById('darkmode-toggle');
darkmode.addEventListener('click', toggleDarkMode);


if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleDarkMode();
  darkmode.checked = true;
}
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}
