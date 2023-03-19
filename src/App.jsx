import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { SingleMovi } from 'pages/SingleMovi';
// import { NavBar } from 'components/NavBar';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SingleMovi />} />
        </Route>
      </Routes>
    </div>
  );
};
