import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [googleUser, setGoogleUser] = useState(false);
  const [rentedBooks, setRentedBooks] = useState([]);
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
  };
  return (
    <UserContext.Provider
      value={[loggedIn, googleUser, userRole, logInUser, logOutUser]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
