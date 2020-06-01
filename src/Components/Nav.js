import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from './UserComponents/UserContext';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
  const [loggedIn, userRole] = useContext(UserContext);
  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' sticky='top'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'>
        <FontAwesomeIcon icon={faBars} className='' />
      </Navbar.Toggle>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav
          justify='around'
          className='w-100 justify-content-evenly align-items-start'
        >
          <Nav.Item>
            <Nav.Link as={Link} to='/'>
              Start <FontAwesomeIcon icon={faHome} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to='/books'>
              Biblioteka <FontAwesomeIcon icon={faBook} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to='/myCollection'>
              Moja Kolekcja <FontAwesomeIcon icon={faLayerGroup} />
            </Nav.Link>
          </Nav.Item>
          {loggedIn ? (
            <Nav.Item>
              <Nav.Link as={Link} to='/logout'>
                Wyloguj Się <FontAwesomeIcon icon={faSignOutAlt} />
              </Nav.Link>
            </Nav.Item>
          ) : (
            <Nav.Item>
              <Nav.Link as={Link} to='/login'>
                Zaloguj Się <FontAwesomeIcon icon={faSignInAlt} />
              </Nav.Link>
            </Nav.Item>
          )}
          {userRole && loggedIn && (
            <Nav.Item>
              <Nav.Link as={Link} to='/panel'>
                Admin Panel <FontAwesomeIcon icon={faUserShield} />
              </Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
