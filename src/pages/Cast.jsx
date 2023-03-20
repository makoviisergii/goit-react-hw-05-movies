import React from 'react';
import { useContext } from 'react';
import { AuthContext } from 'hoc/AuthProvider';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoviCast } from 'api/IPI';

export const Cast = () => {
  const { moviId } = useContext(AuthContext);
  const [casts, setCast] = useState([]);
  useEffect(() => {
    getMoviCast(moviId)
      .then(res => setCast(res.data.cast))
      .catch(error => {
        console.log(error);
      });
  }, [moviId]);

  return (
    <ActList>
      {moviId
        ? casts.map(cast => {
            const src = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;
            return (
              <li key={cast.credit_id}>
                <ActBox>
                  <ImgBox>
                    <img src={src} alt="" />
                  </ImgBox>
                  <div>
                    <h3>{cast.name}</h3>
                    <p>Character: {cast.character}</p>
                  </div>
                </ActBox>
              </li>
            );
          })
        : ''}
    </ActList>
  );
};
const ImgBox = styled.div`
  width: 200px;
  box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
  }
`;
const ActBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const ActList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
`;
