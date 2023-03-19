import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
// import { Context } from '../hoc/AuthProvider'
// import { NavBar } from './NavBar';

export const Layout = () => {
  // const navigate = useNavigate()
  // const { logout, user } = useContext(Context)
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
