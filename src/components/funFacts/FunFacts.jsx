import React, { useState, useEffect } from 'react';
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
