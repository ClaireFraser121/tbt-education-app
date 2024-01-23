// src/components/righteousReading/SmallBookCard.jsx
import React from 'react';
// structure for small book cards below the hero section
const SmallBookCard = () => {
  return (
    <div className="small-book-card bg-white p-4 mb-4">
      <img
        className="object-cover object-center w-full h-32 mb-4"
        src="/path/to/small-book.jpg"
        alt="Small Book"
      />
      <h3 className="text-xl font-bold mb-2">Small Book Title</h3>
      <p className="mb-4">Short description of the small book.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default SmallBookCard;
