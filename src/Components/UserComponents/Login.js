import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Redirect, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import GoogleLogin from 'react-google-login';
import { ReactComponent as Logo } from '../Images/login.svg';
import FormControl from 'react-bootstrap/FormControl';
const Login = () => {
  const [loggedIn, setLoggedIn, setUserRole] = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const updateUserName = (e) => {
    setUserName(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const authenticate = async (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setUserRole('Admin');
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  if (!loggedIn)
    return (
      <div className='custom-start'>
        <div className='custom-form'>
          <Col>
            <div className='custom-form-header'>
              <h2>Zaloguj Się</h2>
            </div>
            <Form onSubmit={authenticate} className=''>
              <Form.Group>
                <Form.Label>Nazwa Użytkownika</Form.Label>
                <FormControl
                  value={userName}
                  onChange={updateUserName}
                  type='text'
                  placeholder='Wprowadź nazwę użytkownika'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                  value={password}
                  onChange={updatePassword}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Hasło'
                />

                <Form.Check
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  type='switch'
                  id='custom-switch'
                  label='Pokaż Hasło'
                />
              </Form.Group>
              <Button type='submit'>Zaloguj</Button>
            </Form>
            <Col sm={12} className='justify-content-center text-center'>
              <h5 className='mt-3'>lub</h5>

              <GoogleLogin
                clientId='438315145104-qrkfsoqg5gdavq23m3sh7sq66gg178gh.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </Col>
          </Col>
        </div>
        <Logo style={{ width: 300 + 'px' }} />
      </div>
    );
  else return <Redirect to='/' />;
};
export default Login;
