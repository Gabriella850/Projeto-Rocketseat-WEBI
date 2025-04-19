const switchBtn = document.getElementById("switch");
const html = document.documentElement;

switchBtn.addEventListener("click", () => {
  html.classList.toggle("light");
});
