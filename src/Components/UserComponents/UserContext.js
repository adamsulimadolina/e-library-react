import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rentedBooks, setRentedBooks] = useState([]);
  const [userRole, setUserRole] = useState('Admin');
  const authUser = async () => {
    let token = localStorage.getItem('token');
    /*await axios.post().catch((error) => {
      if (error.response.status == 401) {
        localStorage.removeItem('token');
        setLoggedIn(false);
      }
    });*/
  };
  return (
    <UserContext.Provider
      value={[loggedIn, setLoggedIn, authUser, userRole, setUserRole]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
