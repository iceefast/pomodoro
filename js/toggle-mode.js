let darkMode = true;
const buttonToggle = document.getElementById("toggle-mode");
const lightMode = document.getElementsByClassName("light");
const html = document.querySelector("html");

buttonToggle.addEventListener("click", () => {
  const mode = darkMode ? "light" : "dark";
  event.currentTarget.querySelector("span").textContent = `${mode} mode on`;
  html.classList.add("light");
  darkMode = false;
});
