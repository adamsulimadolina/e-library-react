import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    await axios.get();
  };
  return (
    <div>
      {books.map((book) => {
        <Book
          authorName={book.authorName}
          authorLastName={book.LastName}
          title={book.title}
          releaseYear={book.releaseYear}
        />;
      })}
    </div>
  );
};
export default Books;
