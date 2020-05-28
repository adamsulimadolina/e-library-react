import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from './UserComponents/UserContext';
const Navigation = () => {
  const [loggedIn, userRole] = useContext(UserContext);
  return (
    <Navbar bg='dark' variant='dark' sticky='top'>
      <Link to='/'>
        <Navbar.Brand>E-Library</Navbar.Brand>
      </Link>
      <Nav className='ml-auto'>
        <Nav.Item>
          <Nav.Link as={Link} to='/books'>
            Biblioteka
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/myBooks'>
            Moja Kolekcja
          </Nav.Link>
        </Nav.Item>
        {loggedIn ? (
          <Nav.Item>
            <Nav.Link as={Link} to='/logout'>
              Wyloguj Się
            </Nav.Link>
          </Nav.Item>
        ) : (
          <Nav.Item>
            <Nav.Link as={Link} to='/login'>
              Zaloguj Się
            </Nav.Link>
          </Nav.Item>
        )}
        {userRole && loggedIn && (
          <Nav.Item>
            <Nav.Link as={Link} to='/panel'>
              Admin Panel
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>
    </Navbar>
  );
};
export default Navigation;
