// FlipDeck.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlipCard from './FlipCard';
import historicalPeopleData from './historicalPeopleData'; // Updated import

const FlipDeck = () => {
  const [personFacts, setPersonFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonFacts = async () => {
      const people = historicalPeopleData.map((person) => person.name);

      const fetchDataPromises = people.map(async (personName) => {
        try {
          const response = await axios.get(`https://rest.blackhistoryapi.io/fact?people=${personName}`, {
            headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
          });

          const facts = response.data.Results;
          const selectedFact = facts[Math.floor(Math.random() * facts.length)];
          return { name: personName, fact: selectedFact.text, tags: selectedFact.tags };
        } catch (error) {
          console.error(`Error fetching person facts for ${personName}`, error);
          return { name: personName, fact: 'Error fetching data', tags: [] };
        }
      });

      try {
        const factResults = await Promise.all(fetchDataPromises);
        setPersonFacts(factResults);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching person facts', error);
        setLoading(false);
      }
    };

    fetchPersonFacts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid-container">
      <div className="card-container">
        {historicalPeopleData.map((person) => (
          <FlipCard 
          id={person.id}
          key={person.id}
          person={person}
          name={person.name}
          image={person.image}
          />
        ))}
      </div>
    </div>

  );
};
export default FlipDeck;
