import React, { useState, useEffect } from 'react';
import Tiles from './Tiles'; // Adjust the path based on your project structure

const FunFacts = () => {
  const [facts, setFacts] = useState([]);

  const fetchBlackHistoryFacts = async () => {
    try {
      const apiKey = 'Q2xhaXJlZnJhaXNlcjk4U3VuIEphbi';
      const apiUrl = 'https://rest.blackhistoryapi.io/template/people';

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      // Check if the response status is OK (200)
      if (response.ok) {
        // Log the response headers
        console.log('API Response Headers:', Object.fromEntries(response.headers.entries()));

        const data = await response.json();
        return data.Results || []; // Make sure to handle the actual structure of your response
      } else {
        // Log an error if the response status is not OK
        console.error(`HTTP error! Status: ${response.status}`);
        return [];
      }
    } catch (error) {
      // Log any errors during the request
      console.error('API Error:', error);
      return [];
    }
  };

  const handleFetchRandomFact = async () => {
    const newFacts = await fetchBlackHistoryFacts();
    setFacts(newFacts);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newFacts = await fetchBlackHistoryFacts();
      setFacts(newFacts);
    };

    fetchData(); // Fetch facts when the component mounts
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      <h1>Did You Know Black History Facts</h1>
      {facts.length > 0 ? (
        facts.map((fact) => (
          <div key={fact.id}>
            <p>{fact.text}</p>
            <p>Source: {fact.source}</p>
            {/* Additional details can be displayed as needed */}
          </div>
        ))
      ) : (
        <p>No facts available</p>
      )}
      <button onClick={handleFetchRandomFact}>Fetch Random Fact</button>
      {/* Other content */}
      <Tiles />
      {/* Other content */}
    </div>
  );
};

export default FunFacts;
