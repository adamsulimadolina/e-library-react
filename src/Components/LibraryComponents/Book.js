import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Book = ({ match }) => {
  const [book, setBook] = useState({});
  useEffect(() => {
    // await axios.get();
  }, []);
  const rentBook = async () => {
    // await axios.post();
  };
  return (
    <div>
      <h1>Ksionżka</h1>
      <button onClick={() => rentBook(book.id)}></button>
    </div>
  );
};
export default Book;
