import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className='navbar-home'>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cuisine/Any" className="cuisines-dropdown">Cuisines</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
