import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserComponents/UserContext';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const BookDetails = ({ match }) => {
  const [book, setBook] = useState({});
  const [copies, setCopies] = '';
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
  useEffect(() => {
    getBookDetails();
  }, []);
  const getBookDetails = async () => {
    let bookDetails =
      'https://elib-hybrid.azurewebsites.net/api/books?id=' + match.params.id;
    let copies =
      'https://elib-hybrid.azurewebsites.net/api/books/notCheckedOutQuantity?id=' +
      match.params.id;
    const reqOne = axios({
      url: bookDetails,
      method: 'GET',
      withCredentials: true,
    });
    const reqTwo = axios({ url: copies, method: 'GET', withCredentials: true });
    await axios
      .all([reqOne, reqTwo])
      .then(
        axios.spread((...responses) => {
          console.log(responses);

          const responseOne = responses[0];
          const responseTwo = responses[1];
          console.log(responseOne.data);
          console.log(responseTwo.data);
          setBook(responseOne.data);
          setCopies(responseTwo.data);
        })
      )
      .catch((err) => console.log(err));
  };
  const rentBook = async (id) => {
    await axios({
      url:
        'https://elib-hybrid.azurewebsites.net/api/borrow/create?bookId=' + id,
      method: 'POST',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        return <Redirect to='/myCollection' />;
      })
      .catch((err) => console.log(err));
  };
  const addCopy = async (id) => {
    await axios({
      url:
        'https://elib-hybrid.azurewebsites.net/api/copies/create?bookId=' + id,
      method: 'POST',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        document.getElementById('message').innerText = 'Egzemplarz Dodany';
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='custom-start'>
      <div className='book-details'>
        <h1>{book.title}</h1>
        {(book.authors || []).map((author) => (
          <h5 key={author.id}>
            {author.name} {author.surname}
          </h5>
        ))}
        <h3>{book.publicationDate}</h3>
        <h5>Dostępne egzemplarze: {copies}</h5>
        {copies !== '' && copies > 0 ? (
          <Button
            onClick={() => rentBook(match.params.id)}
            className='d-block mb-2'
          >
            Wypożycz
          </Button>
        ) : (
          <h3 className='text-danger'>Brak Egzemplarzy</h3>
        )}

        {userRole === 'ROLE_ADMIN' && (
          <Button
            onClick={() => addCopy(match.params.id)}
            className='d-block mb-2'
          >
            Dodaj Egzemplarz
          </Button>
        )}
      </div>
      <h1 id='message'></h1>
    </div>
  );
};
export default BookDetails;
