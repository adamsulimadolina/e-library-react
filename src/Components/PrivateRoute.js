import React, { useContext } from 'react';
import { UserContext } from './UserComponents/UserContext';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loggedIn, userRole] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!loggedIn) <Redirect to='/login' />;
        if (userRole !== 'Admin') <Redirect to='/' />;
        return <Component {...props} />;
      }}
    />
  );
};
