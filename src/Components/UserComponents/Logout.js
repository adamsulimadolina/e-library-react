import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const Logout = () => {
  const [navigate, setNavigate] = useState(false);
  const logout = () => {
    setNavigate(true);
  };
  return { navigate } ? (
    <button onClick={logout}>Wyloguj</button>
  ) : (
    <Redirect to='/' push='true' />
  );
};
export default Logout;
