import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OwnedBook from './OwnedBook';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TextField } from '@material-ui/core/';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
const OwnedBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    getOwnedBooks();
  }, []);
  const getOwnedBooks = async (e) => {
    await axios({
      url: 'https://elib-hybrid.azurewebsites.net/api/borrow/all',
      method: 'GET',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        setMyBooks(res.data);
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 401) {
          console.log('log');
          return <Redirect to='/login' />;
        }
      });
  };

  const returnBook = async (id) => {};
  return (
    <Container className='custom-container '>
      <Row className='justify-content-center'>
        {myBooks.map((bk) => (
          <Col
            key={bk.bookCopy.book.id + bk.bookCopy.book.title}
            lg={3}
            sm={6}
            xs={8}
            md={4}
          >
            <OwnedBook
              title={bk.bookCopy.book.title}
              id={bk.bookCopy.book.id}
              releaseDate={bk.bookCopy.book.publicationDate}
              authors={
                bk.bookCopy.book.authors.length > 1
                  ? [bk.bookCopy.book.authors[0]]
                  : bk.bookCopy.book.authors
              }
            ></OwnedBook>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default OwnedBooks;
