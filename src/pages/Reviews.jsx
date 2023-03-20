import React from 'react';
import { useContext } from 'react';
import { AuthContext } from 'hoc/AuthProvider';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoviReviews } from 'api/IPI';

export const Reviews = () => {
  const { moviId } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMoviReviews(moviId)
      .then(res => setReviews(res.data.results))
      .catch(error => {
        console.log(error);
      });
  }, [moviId]);

  return (
    <RevList>
      {reviews.length > 0
        ? reviews.map(review => {
            return (
              <RevBox key={review.author}>
                <h3>Author: {review.author}</h3>
                <p> {review.content}</p>
              </RevBox>
            );
          })
        : "We don't have any reviews for this movie"}
    </RevList>
  );
};

const RevBox = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const RevList = styled.ul`
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
`;
