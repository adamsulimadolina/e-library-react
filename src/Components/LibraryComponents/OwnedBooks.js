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
const OwnedBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    setMyBooks([
      {
        title: 'tytul1',
        authors: 'Mariusz Pudzianowski',
        Id: '123',
        releaseDate: '12.05',
      },
      {
        title: 'tytul2',
        authors: 'Mariusz Pudzianowski',
        Id: '13123',
        releaseDate: '12.02',
      },
      {
        title: 'tytul13',
        authors: 'Mariusz JKM',
        Id: '133999',
        releaseDate: '12.69',
      },
    ]);
    //axios.get();
  }, []);
  const returnBook = async (id) => {};
  return (
    <Container className='custom-container '>
      <Row className='justify-content-center'>
        {myBooks.map((bk) => (
          <Col key={bk.Id + bk.title} lg={3} sm={6} xs={8} md={4}>
            <OwnedBook
              title={bk.title}
              authors={bk.authors}
              id={bk.Id}
              releaseDate={bk.releaseDate}
            ></OwnedBook>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default OwnedBooks;
