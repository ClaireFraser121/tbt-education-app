// PersonDeck.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';

const PersonDeck = () => {
  const [personFacts, setPersonFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonFacts = async () => {
      const people = [
        'Barack Obama',
        'Rube Foster',
        'Bob Marley',
        'Lauryn Hill',
        'Stevie Wonder',
        'Angela Davis',
        'Claudette Colvin',
        'Bessie Coleman',
        'Carter G. Woodson',
        'Shirley Chisholm',
        'Alice Walker',
        'John Lewis',
        'Benjamin Banneker',
        'Nelson Rolihlahla Mandela',
        /* add other people here */
      ];

      const fetchDataPromises = people.map(async (person) => {
        try {
          const response = await axios.get(`https://rest.blackhistoryapi.io/fact?people=${person}`, {
            headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
          });

          const facts = response.data.Results;
          // Randomly select one fact for each person
          const selectedFact = facts[Math.floor(Math.random() * facts.length)];
          return { name: person, text: selectedFact.text, tags: selectedFact.tags };
        } catch (error) {
          console.error(`Error fetching person facts for ${person}`, error);
          return { name: person, text: 'Error fetching data', tags: [] };
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
        {personFacts.map((fact, index) => (
          <PersonCard key={index} fact={fact} />
        ))}
      </div>
    </div>
  );
};

export default PersonDeck;
