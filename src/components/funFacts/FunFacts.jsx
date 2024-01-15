// "Did You Know" Facts Page:

// Display Section:
//  Design a section to display Black History facts.
//  Integrate the "Did You Know" Black History Facts API.
//  Implement a visually appealing layout for the facts.

// Random Fact Feature:
//  Include a feature to display a random fact.
//  Add a button to fetch and display a new random fact.


// Pseudocode
// # Did You Know Black History Facts API Generator

// FUNCTION fetchBlackHistoryFacts():
//     facts = API_CALL('https://www.blackhistoryapi.io/')
//     RETURN facts

// # Main component
// FUNCTION DidYouKnowPage():
//     facts = fetchBlackHistoryFacts()

//     PRINT 'Did You Know Black History Facts'
//     FOR EACH fact IN facts:
//         PRINT fact

// FunFacts.jsx
import React from 'react';
import Tiles from './Tiles'; // Adjust the path based on your project structure

const FunFacts = () => {
  return (
    <div>
      {/* Other content */}
      <Tiles />
      {/* Other content */}
    </div>
  );
};

export default FunFacts;
