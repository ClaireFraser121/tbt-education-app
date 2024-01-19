// PersonCard.jsx
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './personCard.css'; // Import the CSS file

const PersonCard = ({ fact }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start({ rotateY: isFlipped ? 0 : 180 });
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
      animate={controls}
    >
      <motion.div className="card-face front">
        <p>Click to Flip</p>
        {/* Display person's name or any other info on the front */}
      </motion.div>
      {isFlipped && (
        <motion.div className="card-face back">
          {/* Display API text on the back */}
          <p style={{ color: 'black' }}>{fact && fact.text}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PersonCard;
