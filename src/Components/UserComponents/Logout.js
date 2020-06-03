import React, { useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import { Redirect } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
const Logout = () => {
  const [
    loggedIn,
    setLoggedIn,
    googleUser,
    setGoogleUser,
    setUserRole,
  ] = useContext(UserContext);
  const logOut = () => {
    setLoggedIn(false);
    return <Redirect to='/' />;
  };
  const responseGoogle = (response) => {
    console.log(response);
    setLoggedIn(false);
    setGoogleUser(false);
    return <Redirect to='/' />;
  };
  return googleUser ? (
    <GoogleLogout
      clientId='438315145104-qrkfsoqg5gdavq23m3sh7sq66gg178gh.apps.googleusercontent.com'
      onLogoutSuccess={responseGoogle}
      onFailure={responseGoogle}
    ></GoogleLogout>
  ) : (
    <Nav.Item>
      <Nav.Link onClick={logOut}>
        Wyloguj Się <FontAwesomeIcon icon={faSignOutAlt} />
      </Nav.Link>
    </Nav.Item>
  );
};
export default Logout;
