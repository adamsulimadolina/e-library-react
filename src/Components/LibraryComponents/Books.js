import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Books = () => {
  const [books, setBooks] = useState([{}]);
  useEffect(() => {
    getBooks();
    console.log(books);
  }, []);
  const getBooks = async () => {
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
        Id: '69',
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
        {books.map((bk) => (
          <Col key={bk.Id} lg={3} sm={6} xs={8} md={4}>
            <Book
              title={bk.title}
              displayedAuthors={bk.displayedAuthors}
              key={bk.title}
            ></Book>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Books;
