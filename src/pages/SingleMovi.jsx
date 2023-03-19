import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMoviDetails } from 'api/IPI';
import styled from 'styled-components';

export const SingleMovi = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getMoviDetails(id)
      .then(res => setDetails(res.data))
      .catch(error => {
        console.log(error);
      });
  }, [id]);
  console.log(details);
  const { poster_path, title, vote_average, overview, genres, release_date } =
    details;
  const src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const date = new Date(release_date);
  return (
    <div>
      <button> Go back </button>
      <CardBox>
        <ImgBox>
          <img src={src} alt="" />
        </ImgBox>
        <div>
          <h1>
            {title} ({date.getUTCFullYear()})
          </h1>
          <p>User Score: {Math.round(vote_average * 10)} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <GenresList>
            {genres
              ? genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })
              : ''}
          </GenresList>
        </div>
      </CardBox>
      <InfoBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </InfoBox>
    </div>
  );
};

const CardBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const ImgBox = styled.div`
  height: 500px;
  img {
    height: 100%;
  }
`;
const GenresList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
const InfoBox = styled.div`
  padding: 10px;
  border-top: 2px solid rgba(100, 100, 100, 0.3);
  border-bottom: 2px solid rgba(100, 100, 100, 0.3);
`;
