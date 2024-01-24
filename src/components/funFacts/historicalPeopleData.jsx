// historicalPeopleData.jsx

const historicalPeopleData = [
  { id: 1, name: 'Barack Obama', imageFileName: '../images/barack-obama-1129156_640.jpg' },
  { id: 2, name: 'Rube Foster', imageFileName: '../images/RubeFoster.png' },
  { id: 3, name: 'Bob Marley', imageFileName: '../images/BobMarley.png' },
  { id: 4, name: 'Lauryn Hill', imageFileName: '../images/LaurynHill.png' },
  { id: 5, name: 'Stevie Wonder', imageFileName: '../images/StevieWonder.png' },
  { id: 6, name: 'Angela Davis', imageFileName: '../images/AngelaDavis.png' },
  { id: 7, name: 'Claudette Colvin', imageFileName: '../images/ClaudetteColvin.png' },
  { id: 8, name: 'Bessie Coleman', imageFileName: 'BessieColeman.png' },
  { id: 9, name: 'Carter G. Woodson', imageFileName: 'CarterGWoodson.png' },
  { id: 10, name: 'Shirley Chisholm', imageFileName: 'ShirleyChisholm.png' },
  { id: 11, name: 'Alice Walker', imageFileName: 'AliceWalker.png' },
  { id: 12, name: 'John Lewis', imageFileName: 'JohnRobertLewis.png' },
  { id: 13, name: 'Benjamin Banneker', imageFileName: 'BenjaminBanneker.png' },
  { id: 14, name: 'Nelson Rolihlahla Mandela', imageFileName: 'NelsonMandela.png' },
];

export default historicalPeopleData;


// Add console.log statements to log image paths
historicalPeopleData.forEach(person => {
  console.log(`Image path for ${person.name}: ${person.imageFileName}`);
});
