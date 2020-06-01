import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './Nav';
import Books from './LibraryComponents/Books';
import Login from './UserComponents/Login';
import Logout from './UserComponents/Logout';
import NewBook from './LibraryComponents/NewBook';
import Home from './LibraryComponents/Home';
import Book from './LibraryComponents/Book';
import User from './AdminComponents/User';
import AdminPanel from './AdminComponents/AdminPanel';
import NewUser from './AdminComponents/NewUser';
import DeleteUser from './AdminComponents/DeleteUser';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';
import { UserProvider } from './UserComponents/UserContext';
import EditBook from './LibraryComponents/EditBook';
import BookDetails from './LibraryComponents/BookDetails';
import OwnedBooks from './LibraryComponents/OwnedBooks';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className='App'>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/books' exact component={Books} />
            <Route path='/books/details/:id' component={BookDetails} />
            <PrivateRoute path='/newBook' component={NewBook} />
            <Route path='/login' component={Login} />
            <ProtectedRoute path='/logout' component={Logout} />
            <ProtectedRoute path='/myCollection' exact component={OwnedBooks} />
            <ProtectedRoute path='/panel' exact component={AdminPanel} />
            <ProtectedRoute path='/panel/newUser' component={NewUser} />
            <ProtectedRoute
              path='/myCollection/editBook/:id'
              exact
              component={EditBook}
            />
            <ProtectedRoute
              path='/panel/deleteUser/:id'
              component={DeleteUser}
            />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
