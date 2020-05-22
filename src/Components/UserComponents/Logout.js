import React, { useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { Redirect } from 'react-router-dom';
const Logout = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  useEffect(() => {
    setLoggedIn(false);
  });
  return <Redirect to='/' />;
};
export default Logout;
