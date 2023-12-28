import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
        <li style={{ marginRight: '20px' }}>
          <NavLink to="/" exact activeClassName="active">
            Login
          </NavLink>
        </li>
        <li style={{ marginRight: '20px' }}>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li style={{ marginRight: '20px' }}>
          <NavLink to="*" activeClassName="active">
            Error page
          </NavLink>
        </li>
      </ul>
      <style>{`
        nav a {
          text-decoration: none;
          color: #333;
          font-weight: bold;
        }

        /* Styles for the active class */
        nav a.active {
          color: #ff0000; /* Change the color for the active link */
        }
      `}</style>
    </nav>
  );
};

export default ActiveRoute;
