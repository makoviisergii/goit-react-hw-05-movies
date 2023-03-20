import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  return (
    <HederBox>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </HederBox>
  );
};

const HederBox = styled.header`
  background-color: #f3f9f9;
  justify-content: start;
  gap: 20px;
  font-size: 32px;
  font-weight: 700;
  color: black;
  padding: 10px;
  display: flex;
  box-shadow: 0px 3px 8px -1px rgba(0, 0, 0, 0.75);
  a {
    text-decoration: none;
  }
`;
