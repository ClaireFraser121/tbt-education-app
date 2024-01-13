// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Not yet installed React Router
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/didYouKnow">Did You Know</Link></li>
        <li><Link to="/weeklyQuiz">Weekly Quiz</Link></li>
        <li><Link to="/youTube">YouTube</Link></li>
        <li><Link to="/amazonBook">Amazon Books</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

