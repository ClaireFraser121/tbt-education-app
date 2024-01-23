// SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';
import './searchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    // Fetch data based on search term from API
    axios.get(`API_ENDPOINT_FOR_PEOPLE_SEARCH?query=${searchTerm}`)
      .then(response => setSearchResult(response.data.results))
      .catch(error => console.error('Error fetching search results', error));
  };

  // Your search bar UI code here

  return (
    <div>
      {/* Your search bar component */}
      <ul>
        {searchResult.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
