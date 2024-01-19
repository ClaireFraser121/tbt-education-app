import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './FFCards'; 
import './ffCards.css';
import PersonDeck from './KeyPeople/PersonDeck';
// import './KeyPeople/personCard.css';


const FunFacts = () => {
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    // Fetch a random fact when the component mounts
    getRandomFact();
  }, []);

  const getRandomFact = async () => {
    try {
      const response = await axios.get('https://rest.blackhistoryapi.io/fact/random', {
        headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
      });
  
      console.log('API Response:', response); // Log the response to see what data is returned
  
      const data = response.data.Results[0];
  
      if (data) {
        const factText = data.text || 'No fact available.';
        setRandomFact(factText);
      } else {
        setRandomFact('No fact available.');
      }
    } catch (error) {
      console.error('Error fetching random fact', error);
      setRandomFact('Failed to fetch random fact.');
    }
  };
  

  return (
    <div>
      {/* Display the random fact */}
      <p>{randomFact}</p>

      {/* Display the card with the random fact */}
      <Cards fact={randomFact} onClick={getRandomFact} />
      
      {/* Button to fetch a new random fact */}
      <button onClick={getRandomFact}>Get Random Fact</button>
      <PersonDeck />
    </div>
  );
};


export default FunFacts;
