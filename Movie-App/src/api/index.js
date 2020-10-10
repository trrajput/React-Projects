const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

async function getMovies() {
  const resp = await fetch(API_URL);
  const respData = await resp.json();

  console.log(respData);

  return respData.results;
}

export {API_URL, IMAGE_PATH, SEARCH_API, getMovies}
