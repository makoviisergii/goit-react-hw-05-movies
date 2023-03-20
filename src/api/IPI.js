import axios from 'axios';

export const getTrendingMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=15f31d8327ed5c778802d6897942f753`
  );
};

export const getMoviDetails = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=15f31d8327ed5c778802d6897942f753`
  );
};

export const getMoviSesrch = value => {
  return axios.get(
    `
https://api.themoviedb.org/3/search/movie?api_key=15f31d8327ed5c778802d6897942f753&query=${value}`
  );
};

export const getMoviCast = value => {
  return axios.get(
    `
https://api.themoviedb.org/3/movie/${value}/credits?api_key=15f31d8327ed5c778802d6897942f753`
  );
};

export const getMoviReviews = value => {
  return axios.get(
    `
https://api.themoviedb.org/3/movie/${value}/reviews?api_key=15f31d8327ed5c778802d6897942f753`
  );
};
