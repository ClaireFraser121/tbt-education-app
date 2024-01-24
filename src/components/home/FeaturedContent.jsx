// FeaturedContent.jsx
import React from 'react';
import FeatureCard from './FeatureCard'; // Assuming you have a FeatureCard component

const FeaturedContent = () => {
  return (
    <section className="featured-content">
      <h2>Key Features</h2>
      <div className="feature-cards-container">
        <FeatureCard
          title="Fun Facts Generator"
          description="Explore our 'Fun Facts' Black History API for interesting and educational facts."
        />
        <FeatureCard
          title="Weekly Quizzes"
          description="Engage in weekly quizzes designed to test your knowledge and enhance learning."
        />
        <FeatureCard
          title="Did You Know? Videos"
          description="Watch entertaining and informative 'Did You Know?' videos on our YouTube page."
        />
      </div>
    </section>
  );
};

export default FeaturedContent;
