import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const register = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={register}>
        <input type='email' value={email} onChange={updateEmail}></input>
        <input
          type='password'
          value={password}
          onChange={updatePassword}
        ></input>
        <input
          type='password'
          value={confirmPassword}
          onChange={updateConfirmPassword}
        ></input>
        <button type='submit'>Rejestruj</button>
      </form>
    </div>
  );
};
export default Register;
