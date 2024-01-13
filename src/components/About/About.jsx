// To Do

// About Page:

// Introduction:
//  Write a concise introduction about the purpose of the app.
//  Explain the importance of Black History education.

// Development Team:
//  Introduce the development team.
//  Include names, roles, and a brief description of each member.

// Technologies Used:
//  List the technologies used in the app (React, Netlify, etc.).
//  Briefly explain why these technologies were chosen.

// About.jsx
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <Header />
      <main className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to the Black History Education App! Our mission is to provide engaging and educational content
          related to Black History. Explore interesting facts, take weekly quizzes, and discover recommended books
          on Amazon.
        </p>
        <p>
          Feel free to reach out to us with any questions or suggestions through our <a href="/contact">Contact</a> page.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
