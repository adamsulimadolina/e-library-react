import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { TextField } from '@material-ui/core/';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import User from './User';
import FormControl from 'react-bootstrap/FormControl';
import { UserContext } from '../UserComponents/UserContext';
import { useHistory } from 'react-router-dom';
function AdminPanel() {
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [userFilter, setUserFilter] = useState('');
  useEffect(() => {
    getUsers();
  }, []);
  const updateUserFilter = (e) => {
    setUserFilter(e.target.value);
  };
  const getUsers = async () => {
    await axios({
      url: 'https://elib-hybrid.azurewebsites.net/api/users/all',
      method: 'GET',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.status);
        setUsers(res.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          logOutUser();
          history.push('/login');
        }
      });
  };
  const filterUsers = async (e) => {
    e.preventDefault();
    await axios({
      url:
        'https://elib-hybrid.azurewebsites.net/api/users/filter?username=' +
        userFilter,
      method: 'GET',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          logOutUser();
          history.push('/login');
        }
      });
  };
  return (
    <Container className='custom-container'>
      <div className='justify-content-center d-flex my-3'>
        <Button as={Link} to='/panel/newUser' className='mx-1'>
          Stwórz Użytkownika
        </Button>
        <Button as={Link} to='/panel/newBook' className='mx-1'>
          Dodaj Książkę
        </Button>
      </div>
      <div className='justify-content-center d-flex my-3'>
        <FormControl
          className='w-auto'
          value={userFilter}
          onChange={updateUserFilter}
          placeholder='Wprowadź nazwę użytkownika'
        />
        <Button onClick={filterUsers} className='mx-1'>
          Szukaj
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
