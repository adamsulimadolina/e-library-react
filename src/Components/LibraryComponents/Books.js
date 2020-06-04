import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Book from './Book';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TextField } from '@material-ui/core/';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { UserContext } from '../UserComponents/UserContext';
import MenuItem from '@material-ui/core/MenuItem';
import Form from 'react-bootstrap/Form';
import { formatAuthors } from '../Helpers/Helper';
import Button from 'react-bootstrap/Button';
import { generateYears } from '../Helpers/Helper';
const Books = () => {
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
  const history = useHistory();
  const [books, setBooks] = useState([{}]);
  const [bookFilter, setBookFilter] = useState('');
  const [displayedYears, setDisplayedYears] = useState([]);
  const [authorFilter, setAuthorFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [initialBooks, setInitBooks] = useState([{}]);
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect(() => {
    getInitBooks();
    setDisplayedYears(generateYears());
  }, []);
  const updateYearFilter = (e) => {
    setYearFilter(e.target.value);
  };
  const updateReleaseYear = (e) => {
    setYearFilter(e.target.value);
  };
  const updateBookFilter = (e) => {
    setBookFilter(e.target.value);
  };
  const updateAuthorFilter = (e) => {
    setAuthorFilter(e.target.value);
  };
  const getInitBooks = async () => {
    await axios({
      url: 'https://elib-hybrid.azurewebsites.net/api/books/all',
      method: 'GET',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setBooks(formatAuthors(response.data));
      })
      .catch((err) => {
        if (err.response.status == 401) {
          logOutUser();
          history.push('/login');
        }
      });
  };
  const filterBooks = async () => {
    let releaseDate = yearFilter === 'Domyślnie' ? '' : yearFilter;
    await axios({
      url: `https://elib-hybrid.azurewebsites.net/api/books/filter?title=${bookFilter}&author=${authorFilter}&year=${releaseDate}`,
      method: 'GET',
      withCredentials: true,
    })
      .then((res) => {
        setBooks(formatAuthors(res.data));
      })
      .catch((err) => {
        if (err.response.status == 401) {
          logOutUser();
          history.push('/login');
        }
      });
  };
  return (
    <Container className='custom-container '>
      <div className='justify-content-around d-flex mb-3'>
        <TextField
          id='filter_book'
          label='Tytuł'
          variant='outlined'
          value={bookFilter}
          onChange={updateBookFilter}
        />
        <TextField
          id='filter_author'
          label='Autor'
          variant='outlined'
          onChange={updateAuthorFilter}
          value={authorFilter}
        />
        <FormControl variant='outlined' style={{ width: 170 + 'px' }}>
          <InputLabel htmlFor='data'>Rok Wydania</InputLabel>
          <Select
            id='data'
            variant='outlined'
            type
            label='Rok Wydania'
            onChange={updateReleaseYear}
          >
            <MenuItem value='Domyślnie'>Domyślnie</MenuItem>
            {displayedYears.map((year) => (
              <MenuItem value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={filterBooks}>Szukaj</Button>
      </div>

      <br></br>
      <br></br>
      <Row className='justify-content-center'>
        {books.map((bk) => (
          <Col key={bk.Id + bk.title} lg={3} sm={6} xs={8} md={4}>
            <Book
              title={bk.title}
              displayedAuthors={bk.displayedAuthors}
              id={bk.id}
            ></Book>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Books;
