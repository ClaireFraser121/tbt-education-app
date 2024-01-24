// ./src/components/funFacts/FunFacts.jsx
import React from 'react';
import Container from '../common/SectionContainer';
import RandomFactCarousel from './RandomFactCarousel';
import SearchBar from './SearchBar';
import FlipDeck from './FlipDeck'; // Updated import
import './funFacts.css';
// Importing historicalPeopleData from the correct file
import historicalPeopleData from './historicalPeopleData';



const FunFacts = () => { 
    return (
      <Container>
        <h1 className="mb-4">Fun Facts</h1>
        <RandomFactCarousel />
        <SearchBar />
        <div className="flex flex-wrap">
          {/* Passing historicalPeopleData as a prop to FlipDeck */}
          <FlipDeck key={1} historicalPeopleData={historicalPeopleData} />
        </div>
      </Container>
    );
  };
  
  export default FunFacts;
