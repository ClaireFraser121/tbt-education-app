import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SmallBookCard = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const bookTitles = [
      'Black and British: An Illustrated History',
      'Black Icons - An Illustrated Children\'s Book',
      'M is for Melanin: A Celebration of the Black Child'
    ];
    const apiKey = 'AIzaSyDeWYJ8dZyvM4oOTF01FP-JD4FVpaID6JM';

    const apiRequests = bookTitles.map(title => {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        title
      )}&key=${apiKey}`;
      return axios.get(apiUrl);
    });

    Promise.all(apiRequests)
      .then(responses => {
        const books = responses.map(response => response.data.items[0]);
        setBookData(books.filter(book => book !== undefined));
      })
      .catch(error => {
        console.error('Error fetching book information:', error);
      });
  }, []);

  const bookUrls = [
    'https://amzn.to/4baOdHV',
    'https://amzn.to/3OkKFJl',
    'https://amzn.to/3u8llj2'
  ];

  return (
    <div className="small-book-card-container grid grid-cols-1 md:grid-cols-3 gap-4">
      {bookData.map((book, index) => (
        <div
          key={index}
          className="small-book-card bg-white p-10 mb-6 flex flex-col justify-between rounded-md shadow-md transform transition-transform hover:scale-105 hover:shadow-lg"
        >
          {book && (
            <>
              <div>
                <img
                  className="object-cover object-center w-full h-72 mb-4 rounded"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={`Small Book ${index + 1}`}
                />
                <h3 className="text-xl font-bold mb-2">{book.volumeInfo.title}</h3>
              </div>
              <div className="flex flex-col items-start">
                <p className="mb-4">
                  {book.volumeInfo.description?.length > 108
                    ? `${book.volumeInfo.description.slice(0, 108)}... more in link below`
                    : book.volumeInfo.description || 'Short description not available.'}
                </p>
                <a href={bookUrls[index]} className="block" target="_blank" rel="noopener noreferrer">
                  <button className="bg-yellow-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
                    Get Book
                  </button>
                </a>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SmallBookCard;
