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
  // Data for historical people
  // const historicalPeopleData = [
  //   { id: 1, name: 'Barack Obama', imageFileName: 'barack-obama-1129156_640.jpg' },
  //   { id: 2, name: 'Rube Foster', imageFileName: 'RubeFoster.png' },
  //   { id: 3, name: 'Bob Marley', imageFileName: 'BobMarley.png' },
  //   { id: 4, name: 'Lauryn Hill', imageFileName: 'coolKid.png' },
  //   { id: 5, name: 'Stevie Wonder', imageFileName: 'StevieWonder.png' },
  //   { id: 6, name: 'Angela Davis', imageFileName: 'AngelaDavis.png' },
  //   { id: 7, name: 'Claudette Colvin', imageFileName: 'ClaudetteColvin.png' },
  //   { id: 8, name: 'Bessie Coleman', imageFileName: 'BessieColeman.png' },
  //   { id: 9, name: 'Carter G. Woodson', imageFileName: 'CarterGWoodson.png' },
  //   { id: 10, name: 'Shirley Chisholm', imageFileName: 'ShirleyChisholm.png' },
  //   { id: 11, name: 'Alice Walker', imageFileName: 'AliceWalker.png' },
  //   { id: 12, name: 'John Lewis', imageFileName: 'coolKid.png' },
  //   { id: 13, name: 'Benjamin Banneker', imageFileName: 'coolKid.png' },
  //   { id: 14, name: 'Nelson Rolihlahla Mandela', imageFileName: 'coolKid.png' },
  //   // ... add more people
  // ];

 
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
