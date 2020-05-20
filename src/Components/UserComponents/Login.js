import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
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
  const logIn = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={logIn}>
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
    </div>
  );
};
export default Login;
