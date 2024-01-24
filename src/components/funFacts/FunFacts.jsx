// ./src/components/funFacts/FunFacts.jsx
import React from 'react';
import Container from '../common/SectionContainer';
import RandomFactCarousel from './RandomFactCarousel';
import FlipDeck from './FlipDeck'; // Updated import
import './funFacts.css';
// Importing historicalPeopleData from the correct file
import historicalPeopleData from './historicalPeopleData';
import { Footer } from 'flowbite-react';



const FunFacts = () => { 
    return (
      <Container>
        <RandomFactCarousel />
        <div className="flex flex-wrap">
          {/* Passing historicalPeopleData as a prop to FlipDeck */}
          <FlipDeck key={1} historicalPeopleData={historicalPeopleData} />
        </div>
      </Container>
      
    );
  };
  
  export default FunFacts;
