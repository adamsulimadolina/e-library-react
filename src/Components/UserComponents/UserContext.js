import React, { useState, createContext, useEffect } from 'react';
export const UserContext = createContext();

export const UserProvider = (props) => {
  useEffect(() => {
    let token = localStorage.getItem('loggedIn');
    if (token === 'google') {
      logInUser(true, localStorage.getItem('role'));
    } else if (token === 'standard') {
      logInUser(false, localStorage.getItem('role'));
    } else {
      logOutUser();
    }
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);
  const [googleUser, setGoogleUser] = useState(false);
  const [userRole, setUserRole] = useState('');
  const logInUser = async (googleUser, userRole) => {
    setLoggedIn(true);
    setGoogleUser(googleUser);
    setUserRole(userRole);
  };
  const logOutUser = async () => {
    setLoggedIn(false);
    setGoogleUser(false);
    setUserRole('');
    localStorage.setItem('loggedIn', '');
    localStorage.setItem('role', '');
  };
  return (
    <UserContext.Provider
      value={[loggedIn, googleUser, userRole, logInUser, logOutUser]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
