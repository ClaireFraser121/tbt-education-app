// Amazon Book Page:

// Recommended curated Book Section:
//  Design a section to display a recommended Amazon book.
//  Integrate the Amazon Product Advertising API for book recommendations.
//  Ensure the API affiliate link is securely implemented.

// Affiliate Link:
//  Include a link to the recommended book with your affiliate code.
//  Use a visually engaging format for presenting the book information.

// Set Up Google Sheets API:

// Go to the Google Cloud Console.
// Create a new project or select an existing one.
// Enable the Google Sheets API for your project.
// Create credentials (OAuth client ID) to authenticate your API requests.
// Install Necessary Libraries:

// If you are using a programming language, you might need to install the relevant client library. For example, if you're using Python, you can install the gspread library.
// Write Code to Fetch Data:

// Write code using the Google Sheets API or the client library to fetch data from your Google Sheet. The data can be retrieved in the form of a JSON object.


// Pseudocode

// # Amazon Book Link with API Affiliate

// FUNCTION fetchAmazonBookLink():
//     bookLink = API_CALL('https://your-amazon-api-endpoint.com')
//     RETURN bookLink

// # Main component
// FUNCTION AmazonBookPage():
//     bookLink = fetchAmazonBookLink()

//     PRINT 'Recommended Amazon Book'
//     PRINT 'Check out this highly recommended book on Amazon:'
//     LINK_TO_BOOK(bookLink)

// RighteousReading.jsx
// src/components/righteousReading/RighteousReading.jsx
import React from 'react';
import FeatureBookCard from './FeatureBookCard';
import SmallBookCard from './SmallBookCard';

const RighteousReading = () => {
  return (
    <div className="righteous-reading-container">
      <FeatureBookCard />
      <div className="sm:flex justify-between">
        <SmallBookCard />
        <SmallBookCard />
        <SmallBookCard />
      </div>
    </div>
  );
};

export default RighteousReading;
