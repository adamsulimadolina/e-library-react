import React, { useEffect, useContext } from 'react';
import { ReactComponent as Logo } from '../Images/books.svg';
import { UserContext } from '../UserComponents/UserContext';
const Home = () => {
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
  useEffect(() => {
    console.log(userRole);
  }, []);
  return (
    <div className='custom-start'>
      <h1 className='headline'>E-Biblioteka</h1>
      <Logo />
    </div>
  );
};
export default Home;
