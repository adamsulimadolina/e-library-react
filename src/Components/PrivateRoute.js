import React, { useContext } from 'react';
import { UserContext } from './UserComponents/UserContext';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loggedIn, userRole] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!loggedIn) {
          return <Redirect to='/login' />;
        }
        if (userRole !== 'Admin') {
          return <Redirect to='/' />;
        }
        return <Component {...props} />;
      }}
    />
  );
};
export default PrivateRoute;
