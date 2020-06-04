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
  const [userRole, setUserRole] = useState(true);
  const [adminRole, setAdminRole] = useState(false);
  const [userName, setUserName] = useState('');
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateUserName = (e) => {
    setUserName(e.target.value);
  };
  const updateUserRole = (e) => {
    setUserRole(e.target.checked);
  };
  const updateAdminRole = (e) => {
    setAdminRole(e.target.checked);
  };

  const newUser = async (e) => {
    e.preventDefault();
    let roles = [];
    if (userRole) roles.push('ROLE_USER');
    if (adminRole) roles.push('ROLE_ADMIN');
    console.log(roles);
    await axios({
      url: 'https://elib-hybrid.azurewebsites.net/authentication/signup/',
      method: 'POST',
      withCredentials: true,
      data: {
        username: userName,
        password: password,
        roles: roles,
      },
    })
      .then((res) => {
        console.log(res);
        setCreatedUser(true);
      })
      .catch((err) => console.log(err));
  };
  const generatePassword = async () => {
    let response = await axios.get(
      'https://makemeapassword.ligos.net/api/v1/passphrase/json?s=Strong&sp=n&maxCh=64'
    );
    document.getElementById('haslo').innerText = response.data.pws[0];
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
            <Button onClick={generatePassword}>Generuj</Button>
            <p id='haslo' className='mt-2 text-danger'></p>
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
              <Form.Group>
                <Form.Check
                  inline
                  type='checkbox'
                  label='user'
                  onChange={updateUserRole}
                  checked={userRole}
                />
                <Form.Check
                  inline
                  type='checkbox'
                  label='admin'
                  onChange={updateAdminRole}
                  checked={adminRole}
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
