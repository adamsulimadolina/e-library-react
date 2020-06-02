import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function User({ id, userName }) {
  const [user, setUser] = useState();
  return (
    <Card className='card'>
      <Card.Body className='text-center'>
        <Card.Title>
          <FontAwesomeIcon icon={faUser} className='fa-2x' />
        </Card.Title>
        <Card.Subtitle>{id}</Card.Subtitle>
        <Card.Title className='my-3'>{userName}</Card.Title>
        <Button as={Link} to={`/panel/deleteUser/${userName}`}>
          Usuń
        </Button>
      </Card.Body>
    </Card>
  );
}
export default User;
