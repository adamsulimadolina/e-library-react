import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
const Book = ({ title, displayedAuthors, id }) => {
  const [book, setBook] = useState();
  useEffect(() => {
    console.log(id);
  }, []);

  const returnBook = async (id) => {
    console.log(id);
  };
  return (
    <Card className='mb-5 card'>
      <Card.Body className='text-center'>
        <FontAwesomeIcon icon={faBookOpen} className='fa-2x mb-3' />
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-1'>{displayedAuthors}</Card.Subtitle>
        <Button as={Link} to={`/books/details/${id}`}>
          Zobacz
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Book;
