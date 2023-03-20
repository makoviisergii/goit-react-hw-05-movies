import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMoviDetails } from 'api/IPI';
import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from 'hoc/AuthProvider';

export const SingleMovi = () => {
  const { getId } = useContext(AuthContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getId(id);
    getMoviDetails(id)
      .then(res => setDetails(res.data))
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const { poster_path, title, vote_average, overview, genres, release_date } =
    details;
  const src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const date = new Date(release_date);
  return (
    <div>
      <button onClick={() => navigate(-1)}> Go back </button>
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
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
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
  box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.3);
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
