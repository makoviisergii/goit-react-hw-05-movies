import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
