// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/funFacts">Fun Facts</Link></li>
        <li><Link to="/weeklyQuiz">Weekly Quiz</Link></li>
        <li><Link to="/didYouKnowTV">Did You Know TV</Link></li>
        <li><Link to="/righteousReading">Righteous Reading</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
