const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

async function getMovies() {
  const resp = await fetch(API_URL);
  const respData = await resp.json();
  return respData.results;
}

export {IMAGE_PATH, getMovies}
