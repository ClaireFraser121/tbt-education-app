// FlipCard.jsx
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import axios from 'axios';

import './flipCard.css';

const FlipCard = ({ person }) => {
  console.log('Received person object:', person);
  const [isFlipped, setIsFlipped] = useState(false);
  const [fact, setFact] = useState(person.fact);

  const controls = useAnimation();

  const handleClick = async () => {
    if (!isFlipped) {
      const newFact = await fetchNewFact(person.name); // Pass person.name instead of the whole person object
      setFact(newFact);
    }

    await controls.start({ rotateY: isFlipped ? 0 : 180 });
    setIsFlipped(!isFlipped);
  };

  const fetchNewFact = async (personName) => { // Change parameter name
    try {
      const response = await axios.get(`https://rest.blackhistoryapi.io/fact?people=${personName}`, {
        headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj' },
      });

      const facts = response.data.Results;
      const selectedFact = facts[Math.floor(Math.random() * facts.length)];
      return selectedFact.text;
    } catch (error) {
      console.error(`Error fetching new fact for ${personName}`, error);
      return 'Error fetching data';
    }
  };

 // console.log(`person.imageFileName: ${JSON.stringify(person)}`);


 return (
  <div className="card-container-item">
    <motion.div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick} animate={controls}>
      <motion.div className="card-face front">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${person.imagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'whitesmoke',
            width: '100%',
            height: '100%',
          }}
        />
        <p>{person.name}</p>
      </motion.div>
      {isFlipped && (
        <motion.div className="card-face back">
          <p style={{ color: 'Black' }}>{fact}</p>
        </motion.div>
      )}
    </motion.div>
  </div>
  
);
};

export default FlipCard;

