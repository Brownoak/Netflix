const api = config.API_KEY;
const base_url= config.BASE_URL;
const final_url = base_url + config.MID_URL + api;
const img_url = config.IMG_URL;

const action = config.FETCH_ACTION_MOVIES;
const tvshows= config.FETCH_TV_SHOWS;
const comedy = config.FETCH_COMEDIES;
const crime = config.FETCH_CRIME_MOVIES;
const romance = config.FETCH_ROMANTIC_MOVIES;
const horror = config.FETCH_HORROR_MOVIES;
const scienceFic = config.FETCH_SCIENCE_FIC_MOVIES;
const changeBanner= config.FETCH_CHANGING_BANNER;

var main = document.getElementsByTagName("HEAD")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "css/link.css";
// requests for movies data
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchNowPlaying: `${base_url}${changeBanner}`,
  fetchTVShows: `${base_url}${tvshows}`,
  fetchActionMovies: `${base_url}${action}`,
  fetchComedyMovies: `${base_url}${comedy}`,
  fetchCrimeMovies:  `${base_url}${crime}`,
  fetchHorrorMovies: `${base_url}${horror}`,
  fetchRomanceMovies: `${base_url}${romance}`,
  fetchScienceFic: `${base_url}${scienceFic}`,
};

//Romantic Movies
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("sliders");
    const row = document.createElement("div");
    row.className = "slider__row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "slider__title";
    title.innerText = "Romantic Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__imgs";
    row.appendChild(row_posters);
  

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__img";
      var s = movie.id;
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
      poster.addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
        main.appendChild(link);
        nav.classList.remove("black_nav");
      });

      document
        .querySelector(".popup .close_btn")
        .addEventListener("click", function (e) {
          document.querySelector(".popup").classList.remove("active");
          main.removeChild(link);
        });
    });
  });

//Crime Movies
fetch(requests.fetchCrimeMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("sliders");
    const row = document.createElement("div");
    row.className = "slider__row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "slider__title";
    title.innerText = "Crime Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__imgs";
    row.appendChild(row_posters);
  

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__img";
      var s = movie.id;
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
      poster.addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
        main.appendChild(link);
        nav.classList.remove("black_nav");
      });

      document
        .querySelector(".popup .close_btn")
        .addEventListener("click", function (e) {
          document.querySelector(".popup").classList.remove("active");
          main.removeChild(link);
        });
    });
  });

//Horror
fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("sliders");
    const row = document.createElement("div");
    row.className = "slider__row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "slider__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__imgs";
    row.appendChild(row_posters);
  

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__img";
      var s = movie.id;
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
      poster.addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
        main.appendChild(link);
        nav.classList.remove("black_nav");
      });

      document
        .querySelector(".popup .close_btn")
        .addEventListener("click", function (e) {
          document.querySelector(".popup").classList.remove("active");
          main.removeChild(link);
        });
    });
  });

//comedy
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("sliders");
    const row = document.createElement("div");
    row.className = "slider__row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "slider__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__imgs";
    row.appendChild(row_posters);
  

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__img";
      var s = movie.id;
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
      poster.addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
        main.appendChild(link);
        nav.classList.remove("black_nav");
      });

      document
        .querySelector(".popup .close_btn")
        .addEventListener("click", function (e) {
          document.querySelector(".popup").classList.remove("active");
          main.removeChild(link);
        });
    });
  });

  //science fictions
  fetch(requests.fetchScienceFic)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("sliders");
    const row = document.createElement("div");
    row.className = "slider__row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "slider__title";
    title.innerText = "Science Fiction Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__imgs";
    row.appendChild(row_posters);
  

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__img";
      var s = movie.id;
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
      poster.addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
        main.appendChild(link);
        nav.classList.remove("black_nav");
      });

      document
        .querySelector(".popup .close_btn")
        .addEventListener("click", function (e) {
          document.querySelector(".popup").classList.remove("active");
          main.removeChild(link);
        });
    });
  });


//TV shows
  fetch(requests.fetchTVShows)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("sliders");
    const row = document.createElement("div");
    row.className = "slider__row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "slider__title";
    title.innerText = "TV Shows";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__imgs";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__img";
      var s = movie.id;
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
      poster.addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
        main.appendChild(link);
        nav.classList.remove("black_nav");
      });

      document
        .querySelector(".popup .close_btn")
        .addEventListener("click", function (e) {
          document.querySelector(".popup").classList.remove("active");
          main.removeChild(link);
        });
    });
  });



//banner

// fetch(requests.fetchTrending) 
// .then((res) => res.json())

// .then((data) => {
//   console.log(data.results);
//   // every refresh the movie will be change
//   const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
//   console.log(setMovie);
//   var banner = document.getElementById("banner");
//   var banner_title = document.getElementById("banner_title");
//   // var banner__desc = document.getElementById("banner__description");
//   banner.style.backgroundImage = "linear-gradient(rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%), url(" + img_url + setMovie.backdrop_path + ")";
  
  
//   // banner__desc.innerText = truncate(setMovie.overview, 150);
//   banner_title.innerText = setMovie.name;
// });

fetch(requests.fetchNowPlaying) 
.then((res) => res.json())

.then((data) => {
  console.log(data.results);
  // every refresh the movie will be change
  const getMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(getMovie);
  var banner = document.getElementById("banner");
  var banner_title = document.getElementById("banner_title");
  // var banner__desc = document.getElementById("banner__description");
  banner.style.backgroundImage = "linear-gradient(rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%), url(" + img_url + getMovie.backdrop_path + ")";
  
  
  // banner__desc.innerText = truncate(setMovie.overview, 150);
  banner_title.innerText = getMovie.original_title;
})

