// PersonDeck.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard'; // Create a separate component for each person card

const PersonDeck = () => {
  const [personFacts, setPersonFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data for each person when the component mounts
    const fetchPersonFacts = async () => {
      const people = ['Barack Obama', 'Rube Foster', 'Bob Marley', 'Lauryn Hill', 'Stevie Wonder', 'Angela Davis', 'Claudette Colvin', 'Bessie Coleman', 'Carter G. Woodson', 'Shirley Chisholm', 'Alice Walker', 'John Lewis', 'Benjamin Banneker', 'Nelson Rolihlahla Mandela', /* add other people here */];
      const fetchDataPromises = people.map(person => {
        return axios.get(`https://rest.blackhistoryapi.io/fact?people=${person}`, {
          headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
        });
      });

      try {
        const responses = await Promise.all(fetchDataPromises);
        const facts = responses.map(response => response.data.Results[0]);
        setPersonFacts(facts);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching person facts', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchPersonFacts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // You can customize the loading indicator
  }

  return (
    <div className="card-container">
      {/* Display each person card */}
      {personFacts.map((fact, index) => (
        <PersonCard key={index} fact={fact} />
      ))}
    </div>
  );
};

export default PersonDeck;
