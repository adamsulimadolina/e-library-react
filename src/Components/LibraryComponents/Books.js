import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TextField } from '@material-ui/core/';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

const Books = () => {
  const [books, setBooks] = useState([{}]);
  const [initialBooks, setInitBooks] = useState([{}]);
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect(() => {
    getInitBooks();
  }, []);

  const getInitBooks = async () => {
    setInitBooks([
      {
        authors: ['Andrzej gołota', 'Mariusz Pudzianowski'],
        title: 'Harry Potter',
        releaseYear: '1111',
        Id: '1',
      },
      {
        authors: ['Andrzej Duda'],
        title: 'Księga Jungli',
        releaseYear: '2222',
        Id: '2',
      },
      {
        authors: ['Beata Kozidrak'],
        title: 'Mougli i Syn',
        releaseYear: '3333',
        Id: '3',
      },
      {
        authors: ['Leszek Miller'],
        title: 'Pan Tadeusz',
        releaseYear: '1111',
        Id: '1',
      },
      {
        authors: ['JKM Byku'],
        title: 'Twój Stary',
        releaseYear: '2222',
        Id: '2',
      },
      {
        authors: ['Sławomir Mentzen', 'Grzegorz Braun'],
        title: 'xd3',
        releaseYear: '3333',
        Id: '3',
      },
    ]);
    setBooks([
      {
        authors: ['Andrzej gołota', 'Mariusz Pudzianowski'],
        title: 'Harry Potter',
        releaseYear: '1111',
        Id: '1',
      },
      {
        authors: ['Andrzej Duda'],
        title: 'Księga Jungli',
        releaseYear: '2222',
        Id: '2',
      },
      {
        authors: ['Beata Kozidrak'],
        title: 'Mougli i Syn',
        releaseYear: '3333',
        Id: '3',
      },
      {
        authors: ['Leszek Miller'],
        title: 'Pan Tadeusz',
        releaseYear: '1111',
        Id: '1',
      },
      {
        authors: ['JKM Byku'],
        title: 'Twój Stary',
        releaseYear: '2222',
        Id: '2',
      },
      {
        authors: ['Sławomir Mentzen', 'Grzegorz Braun'],
        title: 'xd3',
        releaseYear: '3333',
        Id: '3',
      },
    ]);
  }

  const filterBooks = async () => {
    let author_filter = document.getElementById("filter_author").value;
    let book_filter = document.getElementById("filter_book").value;
    let tmp_books = [];
    for (let i = 0; i < initialBooks.length; i++) {
      if (initialBooks[i].title.toLowerCase().includes(book_filter.toLowerCase())) {
        for (let j = 0; j < initialBooks[i].authors.length; j++) {
          if (initialBooks[i].authors[j].toLowerCase().includes(author_filter.toLowerCase())) {
            tmp_books.push(initialBooks[i])
            break;
          }
        }
      }
    }
    setBooks(tmp_books)
  };

  const formatAuthors = (data) => {
    data.forEach((element) => {
      console.log(element);
      if (
        element.authors.length > 1 &&
        element.authors[1].length + element.authors[0].length < 30
      ) {
        element.displayedAuthors =
          element.authors[0] + ', ' + element.authors[1] + '...';
      } else {
        element.displayedAuthors = element.authors[0] + '...';
      }
    });
  };


  return (
    <Container className='custom-container '>
      <Row className='justify-content-center'>
        <TextField
          style={{ marginRight: 10 + 'px', marginTop: 10 + 'px' }}
          id="filter_book"
          label="Tytuł"
          variant="outlined"
          onChange={filterBooks} />
        <TextField
          style={{ marginRight: 10 + 'px', marginTop: 10 + 'px' }}
          id="filter_author"
          label="Autor"
          variant="outlined"
          onChange={filterBooks} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            style={{ marginRight: 10 + 'px', marginTop: 10 + 'px' }}
            views={["year"]}
            value={selectedDate} 
            onChange={handleDateChange}
            variant="outlined"
            label="Rok wydania"
            maxDate={new Date()}
            minDate={new Date(1800, 1, 1)}
          />
          </MuiPickersUtilsProvider>
      </Row>
      <br></br><br></br>
      <Row className='justify-content-center'>
        {books.map((bk) => (
          <Col key={bk.Id + bk.title} lg={3} sm={6} xs={8} md={4}>
            <Book
              title={bk.title}
              displayedAuthors={bk.displayedAuthors}
            ></Book>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Books;
