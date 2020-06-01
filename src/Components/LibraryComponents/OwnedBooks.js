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
            Zobacz
            <Link to={`/books/details/${bk.title}`}> {bk.title} </Link>w
            bibliotece
          </h1>
          <button onClick={deleteBook(bk.id)}>Usuń</button>
          <button>
            <Link to={`/myCollection/editBook/${bk.Id}`}>Edytuj</Link>
          </button>
        </div>
      ))}
    </div>
  );
};
export default OwnedBooks;
