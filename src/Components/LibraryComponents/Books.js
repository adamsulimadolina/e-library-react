import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
const Books = () => {
  const [books, setBooks] = useState([{}]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    setBooks([
      {
        authorName: 'xd',
        authorLastName: 'xd',
        title: 'xd',
        releaseYear: '1111',
      },
      {
        authorName: 'xd2',
        authorLastName: 'xd2',
        title: 'xd2',
        releaseYear: '2222',
      },
      {
        authorName: 'xd3',
        authorLastName: 'xd3',
        title: 'xd3',
        releaseYear: '3333',
      },
    ]);
    //await axios.get();
  };
  return (
    <div>
      {books.map((bk) => (
        <Book
          authorName={bk.authorName}
          authorLastName={bk.LastName}
          title={bk.title}
          releaseYear={bk.releaseYear}
        />
      ))}
    </div>
  );
};
export default Books;
