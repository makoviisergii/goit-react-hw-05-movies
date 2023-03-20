import React from 'react';
import { Outlet } from 'react-router-dom';
import { SingleMovi } from 'pages/SingleMovi';

export const MoviesId = () => {
  return (
    <>
      <SingleMovi />
      <div>
        <Outlet />
      </div>
    </>
  );
};
