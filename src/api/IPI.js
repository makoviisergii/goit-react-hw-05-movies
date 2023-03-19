import axios from 'axios';

export const getTrendingMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=15f31d8327ed5c778802d6897942f753`
  );
};

getTrendingMovies().then(rez => console.log(rez.data.results));

export const getMoviDetails = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=15f31d8327ed5c778802d6897942f753`
  );
};

getMoviDetails(100088).then(rez => console.log(rez.data));
