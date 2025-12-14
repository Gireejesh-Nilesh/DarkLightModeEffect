let btn = document.querySelector("button");
let body = document.querySelector(".main");

function applyTheme(theme) {
  body.classList.remove("dark", "light");
  btn.classList.remove("btn-dark");

  if (theme === "dark") {
    body.classList.add("dark");
    btn.classList.add("btn-dark");
  } else {
    body.classList.add("light");
  }
}

let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} 
else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  applyTheme("dark");
} 
else {
  applyTheme("light");
}
btn.addEventListener("click", () => {
  let newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
