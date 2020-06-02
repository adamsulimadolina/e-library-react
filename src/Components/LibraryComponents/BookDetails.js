import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
const BookDetails = ({ match }) => {
  const [book, setBook] = useState({});
  useEffect(() => {
    console.log(match.params.id);
  }, []);
  return (
    <div className='custom-start'>
      <div className='book-details'>
        <h1>{match.params.id}</h1>
        <p>Autotrzy</p>
        <h2>Rok Wydania</h2>
        <Button>Wypożycz</Button>
      </div>
    </div>
  );
};
export default BookDetails;
