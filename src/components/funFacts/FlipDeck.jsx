// FlipDeck.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlipCard from './FlipCard';
import defaultPeopleData from './historicalPeopleData';

const buildFallbackPerson = (person) => {
  const {
    name,
    imageFileName,
    fallbackFact = 'Fun fact coming soon!',
    fallbackTags = [],
    fallbackSource = '',
  } = person;

  const imagePath = `/images/${imageFileName}`;

  return {
    name,
    imagePath,
    fact: fallbackFact,
    tags: fallbackTags,
    source: fallbackSource,
    fallbackFact,
    fallbackTags,
    fallbackSource,
  };
};

const FlipDeck = ({ historicalPeopleData: peopleData = defaultPeopleData }) => {
  const [personFacts, setPersonFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const normalizedPeople = Array.isArray(peopleData) ? peopleData : [];

    const fetchPersonFacts = async () => {
      try {
        const factResults = await Promise.all(
          normalizedPeople.map(async (person) => {
            const fallback = buildFallbackPerson(person);

            try {
              const response = await axios.get(
                `https://rest.blackhistoryapi.io/fact?people=${encodeURIComponent(person.name)}`,
                {
                  headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
                }
              );

              const facts = response?.data?.Results ?? [];

              if (Array.isArray(facts) && facts.length > 0) {
                const selectedFact = facts[Math.floor(Math.random() * facts.length)];

                return {
                  ...fallback,
                  fact: selectedFact?.text ?? fallback.fact,
                  tags: Array.isArray(selectedFact?.tags)
                    ? selectedFact.tags
                    : fallback.tags,
                  source: selectedFact?.source ?? fallback.source,
                };
              }

              return fallback;
            } catch (error) {
              console.error(`Error fetching person facts for ${person.name}`, error);
              return fallback;
            }
          })
        );

        if (isMounted) {
          setPersonFacts(factResults);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching person facts', error);

        if (isMounted) {
          setPersonFacts(normalizedPeople.map((person) => buildFallbackPerson(person)));
          setLoading(false);
        }
      }
    };

    if (normalizedPeople.length > 0) {
      fetchPersonFacts();
    } else {
      setPersonFacts([]);
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [peopleData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid-container">
      <div className="card-container">
        {personFacts.map((person) => (
          <FlipCard key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default FlipDeck;
