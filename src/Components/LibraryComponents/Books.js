import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import { Link } from 'react-router-dom';
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
        Id: '1',
      },
      {
        authorName: 'xd2',
        authorLastName: 'xd2',
        title: 'xd2',
        releaseYear: '2222',
        Id: '2',
      },
      {
        authorName: 'xd3',
        authorLastName: 'xd3',
        title: 'xd3',
        releaseYear: '3333',
        Id: '3',
      },
    ]);

    //await axios.get();
  };
  return (
    <div>
      {books.map((bk) => (
        <div>
          <h1 key={bk.Id}>
            <Link to={`/books/${bk.Id}`}> {bk.title} </Link>
          </h1>
        </div>
      ))}
    </div>
  );
};
export default Books;
