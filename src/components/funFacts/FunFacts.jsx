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

const getRandomFact = async () => {
  try {
      const response = await fetch('https://rest.blackhistoryapi.io/fact/random', {
        method: "GET",
        headers: { 'X-Api-Key': 'amVtU3VuIEphbiAxNCAyMDI0IDExOj'},
        contentType: 'application/json',
      });
      const data = await response.json();
      console.log(data)
  } catch (error) {
      console.error('Error fetching random fact', error);
  }
}
getRandomFact()
};

export default FunFacts;
