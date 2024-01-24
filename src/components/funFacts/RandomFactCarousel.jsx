// RandomFactCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../funFacts/randomFactCarousel.css';

const RandomFactCarousel = () => {
  const [facts, setFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const isMounted = useRef(false);

  const getRandomFacts = async () => {
    try {
      console.log('Calling API for random facts...');
      const response = await axios.get('https://rest.blackhistoryapi.io/fact/random', {
        headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
        params: { limit: 5 },
      });

      const data = response.data.Results;

      if (data) {
        setFacts(data);
        setCurrentFactIndex(0);
      } else {
        setFacts([
          {
            text: 'No information available.',
            people: [''],
            tags: [],
          },
        ]);
      }
    } catch (error) {
      console.error('Error fetching random facts', error);
      setFacts([
        {
          text: 'Failed to fetch random facts.',
          people: [''],
          tags: [],
        },
      ]);
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      getRandomFacts();
      isMounted.current = true;
    }
  }, []); // Empty dependency array to only fetch on mount

  const handleRefresh = () => {
    getRandomFacts();
  };

  return (
    <div className="hero-section bg-cover bg-center h-3/4 md:h-2/3 lg:h-1/2 flex items-center justify-center relative text-white mb-8">
    <div className="overlay absolute inset-0 bg-black opacity-75"></div>
    <div className="text-center z-10 px-4 mt-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-blue-500 text-gray-800 !text-gray-800-important">
        Fun Facts
      </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400 animate__animated animate__fadeInUp">
          Did You Know?
        </h2>
        <div className="fact-card p-8 bg-gray-800 rounded-md shadow-lg text-gray-300"> {/* Adjust text color to text-gray-300 */}
          <h3 className="text-xl md:text-2xl mb-4">{facts[currentFactIndex]?.people?.[0]}</h3>
          <p className="text-sm md:text-base mb-2">{facts[currentFactIndex]?.tags?.join(', ')}</p>
          <p className="text-lg md:text-xl mb-4">{facts[currentFactIndex]?.text}</p>
          <a
            href={facts[currentFactIndex]?.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200 underline"
          >
            Learn More
          </a>
        </div>
        <button
          className="refresh-button bg-blue-500 text-white px-4 py-2 mt-4 mb-8 rounded-full hover:bg-blue-600 transition duration-300"
          onClick={handleRefresh}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default RandomFactCarousel;
