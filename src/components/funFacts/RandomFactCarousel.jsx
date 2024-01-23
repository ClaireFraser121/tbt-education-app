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
    <div className="carousel-container">
      <div className="fact-card">
        <h3>{facts[currentFactIndex]?.people?.[0]}</h3>
        <p>{facts[currentFactIndex]?.tags?.join(', ')}</p>
        <p>{facts[currentFactIndex]?.text}</p>
        <a href={facts[currentFactIndex]?.source} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
      <button className="refresh-button" onClick={handleRefresh}>
        Suprise Me
      </button>
    </div>
  );
};

export default RandomFactCarousel;
