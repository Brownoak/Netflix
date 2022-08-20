var main = document.getElementsByTagName("HEAD")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "css/link.css";

const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.classList.add("black_nav");
  } else {
    nav.classList.remove("black_nav");
  }
});
