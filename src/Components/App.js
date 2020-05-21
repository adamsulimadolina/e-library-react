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
function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/books' component={Books} />
          <Route path='/new' component={NewBook} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
