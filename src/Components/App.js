import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Nav';
import Books from './LibraryComponents/Books';
import Login from './UserComponents/Login';
import Logout from './UserComponents/Logout';
import NewBook from './LibraryComponents/NewBook';
import Home from './LibraryComponents/Home';
import AdminPanel from './AdminComponents/AdminPanel';
import NewUser from './AdminComponents/NewUser';
import DeleteUser from './AdminComponents/DeleteUser';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';
import { UserProvider } from './UserComponents/UserContext';
import EditBook from './LibraryComponents/EditBook';
import BookDetails from './LibraryComponents/BookDetails';
import OwnedBooks from './LibraryComponents/OwnedBooks';
import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from './theme';
import NotFound from './NotFound';
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <Router>
          <div className='App'>
            <Navigation />
            <Switch>
              <Route path='/' exact component={Home} />
              <ProtectedRoute path='/books' exact component={Books} />
              <ProtectedRoute
                path='/books/details/:id'
                component={BookDetails}
              />
              <PrivateRoute path='/panel/newBook' component={NewBook} />
              <Route path='/login' component={Login} />
              <ProtectedRoute path='/logout' component={Logout} />
              <ProtectedRoute
                path='/myCollection'
                exact
                component={OwnedBooks}
              />
              <PrivateRoute path='/panel' exact component={AdminPanel} />
              <PrivateRoute path='/panel/newUser' component={NewUser} />

              <ProtectedRoute
                path='/myCollection/editBook/:id'
                exact
                component={EditBook}
              />
              <PrivateRoute
                path='/panel/deleteUser/:id'
                component={DeleteUser}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
