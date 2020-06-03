import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
const OwnedBook = ({ title, authors, id, releaseDate }) => {
  const [book, setBook] = useState();
  useEffect(() => {
    // await axios.get();
  }, []);

  const returnBook = async (id) => {
    console.log(id);
  };
  return (
    <Card className='mb-5 card'>
      <Card.Body className='text-center'>
        <FontAwesomeIcon icon={faBookOpen} className='fa-2x mb-3' />
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-1'>{authors}</Card.Subtitle>
        <Card.Subtitle className='mb-1 '>{releaseDate}</Card.Subtitle>
        <Button onClick={() => returnBook(id)}>Zwróć</Button>
      </Card.Body>
    </Card>
  );
};
export default OwnedBook;
