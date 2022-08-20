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


const requests = {
    fetchNowPlaying: `${base_url}${changeBanner}`,
    fetchTVShows: `${base_url}${tvshows}`,
    fetchActionMovies: `${base_url}${action}`,
    fetchComedyMovies: `${base_url}${comedy}`,
    fetchCrimeMovies:  `${base_url}${crime}`,
    fetchHorrorMovies: `${base_url}${horror}`,
    fetchRomanceMovies: `${base_url}${romance}`,
    fetchScienceFic: `${base_url}${scienceFic}`,
  };

