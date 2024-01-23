// src/components/righteousReading/FeatureBookCard.jsx
import React from 'react';
//Structure for feature book cardand hero setion components
const FeatureBookCard = () => {
  return (
    <div className="hero-section bg-gray-800 text-white p-8 mb-8">
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Featured Book Title</h2>
          <p className="mb-4">
            This is a block of text describing the featured book. Add more details here.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
        <div className="w-1/2">
          <img
            className="object-cover object-center w-full h-64"
            src="/path/to/featured-book.jpg"
            alt="Featured Book"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureBookCard;
