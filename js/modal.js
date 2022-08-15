var main = document.getElementsByTagName("HEAD")[0];

// Create new link Element
var link = document.createElement("link");

// set the attributes for link element
link.rel = "stylesheet";
link.type = "text/css";
link.href = "link.css";

document.querySelector(".posters").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
  main.appendChild(link);
});

document.querySelector(".popup .close_btn")
  .addEventListener("click", function (e) {
    document.querySelector(".popup").classList.remove("active");
   main.removeChild(link);
},
);
