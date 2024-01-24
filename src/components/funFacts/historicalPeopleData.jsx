// historicalPeopleData.jsx

const historicalPeopleData = [
  { id: 1, name: 'Barack Obama', imageFileName: '../../src/images/barack-obama-1129156_640.jpg' },
  { id: 2, name: 'Rube Foster', imageFileName: '../../src/images/RubeFoster.png' },
  { id: 3, name: 'Bob Marley', imageFileName: '../../src/images/BobMarley.png' },
  { id: 4, name: 'Lauryn Hill', imageFileName: '../../src/images/LaurynHill.png' },
  { id: 5, name: 'Stevie Wonder', imageFileName: '../../src/images/StevieWonder.png' },
  { id: 6, name: 'Angela Davis', imageFileName: '../../src/images/AngelaDavis.png' },
  { id: 7, name: 'Claudette Colvin', imageFileName: '../../src/images/ClaudetteColvin.png' },
  { id: 8, name: 'Bessie Coleman', imageFileName: '../../src/images/BessieColeman.png' },
  { id: 9, name: 'Carter G. Woodson', imageFileName: '../../src/images/CarterGWoodson.png' },
  { id: 10, name: 'Shirley Chisholm', imageFileName: '../../src/images/ShirleyChisholm.png' },
  { id: 11, name: 'Alice Walker', imageFileName: '../../src/images/AliceWalker.png' },
  { id: 12, name: 'John Lewis', imageFileName: '../../src/images/JohnRobertLewis.png' },
  { id: 13, name: 'Benjamin Banneker', imageFileName: '../../src/images/BenjaminBanneker.png' },
  { id: 14, name: 'Nelson Rolihlahla Mandela', imageFileName: '../../src/images/NelsonMandela.png' },
];

export default historicalPeopleData;

// Add console.log statements to log image paths
historicalPeopleData.forEach(person => {
  console.log(`Image path for ${person.name}: ${person.imageFileName}`);
});
