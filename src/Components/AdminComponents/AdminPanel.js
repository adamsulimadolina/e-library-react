import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import User from './User';
function AdminPanel() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    await axios({
      url: 'https://elib-hybrid.azurewebsites.net/api/users/all',
      method: 'GET',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
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
          <User id={user.id} userName={user.username} key={user.id} />
        ))}
      </div>
    </Container>
  );
}
export default AdminPanel;
