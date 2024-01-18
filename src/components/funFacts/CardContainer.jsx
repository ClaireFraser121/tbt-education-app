import React from 'react';
import Cards from './Cards';
import './Cards.css';

const CardContainer = () => {
    return (
      <div className="container">
        <div className="card-container">
          <Cards fact="Front text" />
        </div>
      </div>
    );
  };

export default CardContainer;
