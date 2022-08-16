var main = document.getElementsByTagName("HEAD")[0];

// Create new link Element
var link = document.createElement("link");

// set the attributes for link element
link.rel = "stylesheet";
link.type = "text/css";
link.href = "css/link.css";

document.querySelector(".event_img").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
  main.appendChild(link);
  nav.classList.remove("black_nav");

});



document.querySelector(".event_img2").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
  });


document.querySelector(".event_img3").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
  });

document.querySelector(".event_img4").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
  });

document.querySelector(".event_img5").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
  });

document.querySelector(".event_img6").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
});


document.querySelector(".event_img7").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
  });

document.querySelector(".event_img8").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
  });

  document.querySelector(".event_img9").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
  });

  document.querySelector(".event_img10").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
    main.appendChild(link);
    nav.classList.remove("black_nav");
  
  });

  document.querySelector(".popup .close_btn")
  .addEventListener("click", function (e) {
    document.querySelector(".popup").classList.remove("active");
   main.removeChild(link);
},
);
