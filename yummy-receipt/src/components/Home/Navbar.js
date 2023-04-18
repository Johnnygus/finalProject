import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showCuisines, setShowCuisines] = useState(false);
  const cuisines = [
    'American',
    'British',
    'Caribbean',
    'Chinese',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Mexican',
    'Spanish',
    'Thai',
    'Vietnamese',
  ];

  const toggleCuisines = () => {
    setShowCuisines(!showCuisines);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className='navbar-home'>
          <Link to="/">Home</Link>
        </li>
        <li onMouseEnter={toggleCuisines} onMouseLeave={toggleCuisines}>
          <span className="cuisines-dropdown">Cuisines</span>
          {showCuisines && (
            <ul className="cuisines-dropdown-list">
              {cuisines.map((cuisine) => (
                <li key={cuisine}>
                  <Link to={`/cuisine/${cuisine}`}>{cuisine}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
