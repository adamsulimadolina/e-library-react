import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import User from './User';
function AdminPanel() {
  const [users, setUsers] = useState([
    { id: '12412512', userName: 'daniel' },
    { id: '12412513242', userName: 'daniel' },
    { id: '68457457', userName: 'adam' },
    { id: '2344vsfv235b', userName: 'michał' },
    { id: '23423zaaw2', userName: 'Sz****' },
  ]);
  useEffect(() => {
    //axios.get();
  }, []);
  return (
    <Container className='custom-container'>
      <div className='justify-content-around d-flex my-5'>
        <Button as={Link} to='/panel/newUser'>
          Stwórz Użytkownika
        </Button>
        <Button as={Link} to='/panel/newBook'>
          Dodaj Książkę
        </Button>
      </div>
      <div className='custom-grid'>
        {users.map((user) => (
          <User id={user.id} userName={user.userName} key={user.id} />
        ))}
      </div>
    </Container>
  );
}
export default AdminPanel;
