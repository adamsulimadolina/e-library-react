import React, { useContext, useEffect } from 'react';
import { UserContext } from './UserComponents/UserContext';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [
    loggedIn,
    setLoggedIn,
    googleUser,
    setGoogleUser,
    authUser,
    userRole,
    setUserRole,
  ] = useContext(UserContext);
  useEffect(() => {
    console.log(userRole);
    console.log(loggedIn);
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!loggedIn) {
          return <Redirect to='/login' />;
        } else if (userRole !== 'Admin') {
          return <Redirect to='/' />;
        }
        return <Component {...props} />;
      }}
    />
  );
};
export default PrivateRoute;
