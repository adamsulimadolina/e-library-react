import React, { useContext, useEffect } from 'react';
import { UserContext } from './UserComponents/UserContext';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
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
        } else if (userRole !== 'ROLE_ADMIN') {
          return <Redirect to='/' />;
        }
        return <Component {...props} />;
      }}
    />
  );
};
export default PrivateRoute;
