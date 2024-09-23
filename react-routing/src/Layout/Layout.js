import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  // Function to determine if the link is active
  const getActive = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <>
      <header className="App-header">
        <NavLink to="/" className={getActive}>Home</NavLink>
        <NavLink to="/Contacts" className={getActive}>Contacts</NavLink>
        <NavLink to="/about" className={getActive}>About</NavLink>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>All rights reserved...</p>
      </footer>
    </>
  );
};

export default Layout;
