import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TextField } from '@material-ui/core/';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const OwnedBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    setMyBooks([
      { title: 'tytul1', displayedAuthors: 'Mariusz Pudzianowski', Id: '123' },
      {
        title: 'tytul2',
        displayedAuthors: 'Mariusz Pudzianowski',
        Id: '13123',
      },
      { title: 'tytul13', displayedAuthors: 'Mariusz JKM', Id: '133999' },
    ]);
    //axios.get();
  }, []);
  const returnBook = async (id) => {};
  return (
    <Container className='custom-container '>
      <Row className='justify-content-center'>
        {myBooks.map((bk) => (
          <Col key={bk.Id + bk.title} lg={3} sm={6} xs={8} md={4}>
            <Book
              title={bk.title}
              displayedAuthors={bk.displayedAuthors}
              id={bk.Id}
              owned={true}
            ></Book>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default OwnedBooks;
