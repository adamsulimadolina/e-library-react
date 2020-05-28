import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const Login = () => {
  const [loggedIn, setLoggedIn, setUserRole] = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const updateEmail = (e) => {
    setEmail(e.target.value);
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
  return (
    <div>
      {loggedIn ? (
        <Redirect to='/' />
      ) : (
        <form onSubmit={authenticate}>
          <input value={password} onChange={updatePassword} type='email' />
          <input
            value={email}
            onChange={updateEmail}
            type={showPassword ? 'text' : 'password'}
          />
          <button
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            Pokaż Hasło
          </button>
          <button type='submit'>Zaloguj</button>
        </form>
      )}
    </div>
  );
};
export default Login;
