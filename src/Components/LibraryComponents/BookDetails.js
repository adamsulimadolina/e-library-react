import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserComponents/UserContext';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const BookDetails = ({ match }) => {
  const [book, setBook] = useState({});
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
  useEffect(() => {
    console.log(match.params.id);
    console.log(userRole);
  }, []);
  const getBookDetails = async () => {
    //await axios.get("").then(response=>{});
  };
  const rentBook = (id) => {
    console.log(id);

    return <Redirect to='/myCollection' />;
  };
  const addCopy = (id) => {
    console.log(id);
  };
  return (
    <div className='custom-start'>
      <div className='book-details'>
        <h1>{match.params.id}</h1>
        <p>Autotrzy</p>
        <h2>Rok Wydania</h2>
        <Button
          onClick={() => rentBook(match.params.id)}
          className='d-block mb-2'
        >
          Wypożycz
        </Button>
        {userRole === 'ROLE_ADMIN' && (
          <Button
            onClick={() => addCopy(match.params.id)}
            className='d-block mb-2'
          >
            Dodaj Egzemplarz
          </Button>
        )}
      </div>
    </div>
  );
};
export default BookDetails;
