import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const OwnedBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    //axios.get();
  }, []);
  const deleteBook = async (id) => {};
  return (
    <div>
      {myBooks.map((bk) => (
        <div>
          <h1 key={bk.Id}>
            <Link to={`/books/${bk.Id}`}> {bk.title} </Link>
          </h1>
          <button onClick={deleteBook(bk.id)}></button>
          <button>
            <Link to={`/books/editBook/${bk.Id}`}></Link>
          </button>
        </div>
      ))}
    </div>
  );
};
export default OwnedBooks;
