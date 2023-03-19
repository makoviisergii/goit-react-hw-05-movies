import React from 'react';
import { getTrendingMovies } from 'api/IPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(res => setMovies([...res.data.results]))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movi => {
          return (
            <li key={movi.id}>
              <Link to={`/movies/${movi.id}`}>
                {movi.title ? movi.title : movi.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
