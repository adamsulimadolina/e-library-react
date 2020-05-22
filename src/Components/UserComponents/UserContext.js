import React, { useState, useEffect, createContext } from 'react';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rentedBooks, setRentedBooks] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const authUser = () => {};
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn, authUser, userRole]}>
      {props.children}
    </UserContext.Provider>
  );
};
