import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top'>
      <Link to='/'>
        <Navbar.Brand>E-Library</Navbar.Brand>
      </Link>
      <Nav className='ml-auto'>
        <Nav.Item>
          <Nav.Link>
            <Link to='/books'>Biblioteka</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/new'>Dodaj Nową</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/register'>Zarejestruj Się</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/login'>Zaloguj Się</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/logout'>Wyloguj Się</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default Navigation;
