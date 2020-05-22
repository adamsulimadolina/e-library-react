import React, { useContext } from 'react';
import { UserContext } from './UserComponents/UserContext';
import { Route, Redirect } from 'react-router-dom';
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [loggedIn] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};
export default ProtectedRoute;
