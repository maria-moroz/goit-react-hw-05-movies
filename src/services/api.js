import axios from 'axios';

const API_KEY = '306e564986f0782b8ec4bf227b0f3c28';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrending() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function searchMovies(filter) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: filter,
  });
  const response = await axios.get(`/search/movie?${searchParams}`);
  return response.data.results;
}
