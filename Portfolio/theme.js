const themeToggle = document.getElementById("theme-toggle");

function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
}

function toggleTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}
function setInitialTheme() {
  const preferDarkMode = window.matchMedia(
    "(prefer-colours-scheme: light)"
  ).matches;
  if (preferDarkMode) {
    themeToggle.checked = true;
    setTheme("dark");
  } else {
    themeToggle.checked = false;
    setTheme("light");
  }
}

function showInitialTheme() {
  setInitialTheme();
  themeToggle.addEventListener("change", toggleTheme);
}
document.addEventListener("DOMContentLoaded", showInitialTheme);

