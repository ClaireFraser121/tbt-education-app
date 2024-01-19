// FFCards.jsx
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Cards = ({ fact, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      await controls.start({ rotateY: isFlipped ? 0 : 180 });
      setIsFlipped(!isFlipped);

      // Wait for the animation to complete before setting the new fact
    await controls.start({ rotateY: isFlipped ? 0 : 180 });
      onClick();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
      animate={controls}
    >
      <motion.div className="card-face front">
        <p>Click to Flip</p>
      </motion.div>
      {isFlipped && (
        <motion.div className="card-face back">
          {isLoading ? <p></p> : <p style={{ color: 'black' }}>{fact}</p>}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Cards;
