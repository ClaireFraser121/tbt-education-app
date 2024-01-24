// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FeaturedContent from './FeaturedContent'; // Assume this component highlights key features

const Home = () => {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to LearnHub</h1>
          <p>Your Gateway to Fun and Interactive Learning</p>
          <Link to="/signup" className="cta-button">
            Get Started
          </Link>
        </section>

        {/* Featured Content Section */}
        <FeaturedContent />

        {/* About Section */}
        <section className="about">
          <h2>About LearnHub</h2>
          <p>
            LearnHub is an education app designed to make learning enjoyable for children aged 7-14.
            Explore our "Fun Facts" Black History API, weekly quizzes, engaging YouTube videos, and recommended reading.
          </p>
          <Link to="/about" className="learn-more-link">
            Learn more about LearnHub
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
