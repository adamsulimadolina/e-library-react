import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../Images/adduser.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
function NewUser() {
  const [createdUser, setCreatedUser] = useState(false);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateUserName = (e) => {
    setUserName(e.target.value);
  };
  const newUser = async () => {
    //await axios.post();
    setCreatedUser(true);
  };
  const generatePassword = async () => {
    let response = await axios.get('https://passwordwolf.com/api/?repeat=1');
    console.log(response);
  };
  if (createdUser) return <Redirect to='/panel' />;
  else
    return (
      <div className='custom-start'>
        <div className='custom-form'>
          <Col>
            <div className='custom-form-header'>
              <h2>Stwórz użytkownika</h2>
            </div>
            <Form onSubmit={newUser}>
              <Form.Group>
                <Form.Label>Nazwa Użytkownika</Form.Label>
                <FormControl
                  value={userName}
                  onChange={updateUserName}
                  placeholder='Wprowadź nazwę użytkownika'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Hasło</Form.Label>
                <FormControl
                  type='password'
                  value={password}
                  onChange={updatePassword}
                  placeholder='Wprowadź hasło'
                />
              </Form.Group>
              <Button type='submit'>Stwórz</Button>
            </Form>
          </Col>
        </div>
        <Logo />
      </div>
    );
}
export default NewUser;
