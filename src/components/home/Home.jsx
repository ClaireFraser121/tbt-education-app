// Home.jsx
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Your Home page content goes here.
         Header Section:
        Design a visually appealing header introducing the app.
        Add navigation links to other pages (About, Contact, etc.).

        Featured Section:
        Highlight key features of the app.
        Include engaging visuals or icons. */}
        <h2>Welcome to the Black History Education App!</h2>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
