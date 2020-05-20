import React from 'react';
const Nav = () => {
  return (
    <div>
      <nav>
        <Link to='/'>
          <h5>E-Library</h5>
        </Link>
        <ul>
          <li>
            <Link to='/books'>Biblioteka</Link>
          </li>
          <li>
            <Link to='/new'>Dodaj Nową</Link>
          </li>
          <li>
            <Link to='/register'>Zarejestruj Się</Link>
          </li>
          <li>
            <Link to='/login'>Zaloguj Się</Link>
          </li>
          <li>
            <Link to='/logout'>Wyloguj Się</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
