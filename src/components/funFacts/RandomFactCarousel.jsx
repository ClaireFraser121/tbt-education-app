// RandomFactCarousel.jsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../funFacts/randomFactCarousel.css';
import historicalPeopleData from './historicalPeopleData';

const FALLBACK_FACTS = historicalPeopleData.map(
  ({ name, fallbackFact = 'Fun fact coming soon!', fallbackTags = [], fallbackSource = '' }) => ({
    text: fallbackFact,
    people: [name],
    tags: fallbackTags,
    source: fallbackSource,
  })
);

const RandomFactCarousel = () => {
  const [facts, setFacts] = useState(FALLBACK_FACTS);
  const [currentFactIndex, setCurrentFactIndex] = useState(() =>
    Math.floor(Math.random() * FALLBACK_FACTS.length)
  );
  const [isUsingFallback, setIsUsingFallback] = useState(true);
  const isMounted = useRef(false);

  const setFallbackFacts = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * FALLBACK_FACTS.length);
    setFacts(FALLBACK_FACTS);
    setCurrentFactIndex(randomIndex);
    setIsUsingFallback(true);
  }, []);

  const getRandomFacts = useCallback(async () => {
    try {
      const response = await axios.get('https://rest.blackhistoryapi.io/fact/random', {
        headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
        params: { limit: 5 },
      });

      const data = Array.isArray(response?.data?.Results) ? response.data.Results : [];

      if (data.length > 0) {
        setFacts(data);
        setCurrentFactIndex(0);
        setIsUsingFallback(false);
      } else {
        setFallbackFacts();
      }
    } catch (error) {
      console.error('Error fetching random facts', error);
      setFallbackFacts();
    }
  }, [setFallbackFacts]);

  useEffect(() => {
    if (!isMounted.current) {
      getRandomFacts();
      isMounted.current = true;
    }
  }, [getRandomFacts]); // Empty dependency array to only fetch on mount

  useEffect(() => {
    if (!isUsingFallback) {
      return undefined;
    }

    const retryTimeout = setTimeout(() => {
      getRandomFacts();
    }, 60000);

    return () => clearTimeout(retryTimeout);
  }, [getRandomFacts, isUsingFallback]);

  const handleRefresh = () => {
    if (isUsingFallback) {
      setFallbackFacts();
      return;
    }

    if (facts.length <= 1) {
      getRandomFacts();
      return;
    }

    setCurrentFactIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % facts.length;

      if (nextIndex === 0) {
        getRandomFacts();
      }

      return nextIndex;
    });
  };

  const currentFact = facts[currentFactIndex] ?? FALLBACK_FACTS[0];
  const hasSource = Boolean(currentFact?.source);

  return (
    <div className="hero-section bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-cover bg-center h-3/4 md:h-2/3 lg:h-1/2 flex items-center justify-center relative text-white mb-8">
      <div className="text-center z-10 px-6 md:px-16 mt-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-blue-500 text-gray-800 !text-gray-800-important">
          Fun Facts
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400 animate__animated animate__fadeInUp">
          Did You Know?
        </h2>
        <div className="fact-card p-8 bg-green-950 rounded-md shadow-lg text-gray-300">
          <h3 className="text-xl md:text-2xl mb-4">{currentFact?.people?.[0]}</h3>
          <p className="text-sm md:text-base mb-2">{currentFact?.tags?.join(', ')}</p>
          <p className="text-lg md:text-xl mb-4">{currentFact?.text}</p>
          {hasSource ? (
            <a
              href={currentFact.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-blue-200 underline"
            >
              Learn More
            </a>
          ) : (
            <span className="text-sm md:text-base text-yellow-200">Source unavailable</span>
          )}
          {isUsingFallback && (
            <p className="text-xs md:text-sm text-yellow-300 mt-4">
              Showing curated facts while we reconnect to the live feed.
            </p>
          )}
        </div>
        <button
          className="refresh-button bg-yellow-400 hover:bg-green-400 text-white px-4 py-2 mt-4 mb-8 rounded-full hover:bg-blue-600 transition duration-300"
          onClick={handleRefresh}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default RandomFactCarousel;
