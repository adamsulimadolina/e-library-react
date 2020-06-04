import React, { useEffect, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../UserComponents/UserContext';
const OwnedBook = ({ title, authors, id, releaseDate, getBooks }) => {
  const [book, setBook] = useState();
  const history = useHistory();
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
  const returnBook = async (id) => {
    console.log(id);
    await axios({
      url: 'https://elib-hybrid.azurewebsites.net/api/borrow/update?id=' + id,
      method: 'PUT',
      withCredentials: true,
    })
      .then((res) => {
        getBooks();
      })
      .catch((err) => {
        if (err.response.status == 401) {
          logOutUser();
          history.push('/login');
        }
      });
  };
  return (
    <Card className='mb-5 card'>
      <Card.Body className='text-center'>
        <FontAwesomeIcon icon={faBookOpen} className='fa-2x mb-3' />
        <Card.Title>{title}</Card.Title>
        {authors.map((author) => (
          <h5 key={author.id}>
            {author.name} {author.surname}
          </h5>
        ))}
        <h5>...</h5>
        <Button onClick={() => returnBook(id)}>Zwróć</Button>
      </Card.Body>
    </Card>
  );
};
export default OwnedBook;
