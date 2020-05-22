import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './Nav';
import Books from './LibraryComponents/Books';
import Login from './UserComponents/Login';
import Logout from './UserComponents/Logout';
import Register from './UserComponents/Register';
import NewBook from './LibraryComponents/NewBook';
import Home from './LibraryComponents/Home';
import Book from './LibraryComponents/Book';
import User from './UserComponents/User';
import AdminPanel from './AdminComponents/AdminPanel';
import NewPassword from './AdminComponents/NewPassword';
import DeleteUser from './AdminComponents/DeleteUser';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';
import DeleteBook from './LibraryComponents/DeleteBook';
import { UserProvider } from './UserComponents/UserContext';
function App() {
  return (
    <UserProvider>
      <Router>
        <div className='App'>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/books' exact component={Books} />
            <Route path='/books/:id' component={Book} />
            <Route path='/newBook' component={NewBook} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/logout' component={Logout} />
            <PrivateRoute path='/panel' exact component={AdminPanel} />
            <PrivateRoute
              path='/panel/newPassword/:id'
              component={NewPassword}
            />
            <ProtectedRoute path='/editBook/:id' exact component={EditBook} />
            <ProtectedRoute path='/editBook/delete/:id' component={EditBook} />
            <PrivateRoute path='/panel/deleteUser' component={DeleteUser} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
