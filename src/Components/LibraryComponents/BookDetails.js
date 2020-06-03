import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const BookDetails = ({ match }) => {
  const [book, setBook] = useState({});
  useEffect(() => {
    console.log(match.params.id);
  }, []);
  const getBookDetails = async () => {
    //await axios.get("").then(response=>{});
  };
  const rentBook = (id) => {
    console.log(id);
    return <Redirect to='/myCollection' />;
  };
  return (
    <div className='custom-start'>
      <div className='book-details'>
        <h1>{match.params.id}</h1>
        <p>Autotrzy</p>
        <h2>Rok Wydania</h2>
        <Button onClick={() => rentBook(match.params.id)}>Wypożycz</Button>
      </div>
    </div>
  );
};
export default BookDetails;
