import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../Images/adduser.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { generateYears } from '../Helpers/Helper';
import { UserContext } from '../UserComponents/UserContext';
const NewBook = () => {
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
  const history = useHistory();
  const [years, setYears] = useState([]);
  useEffect(() => {
    setYears(generateYears());
  }, []);
  const [releaseYear, setReleaseYear] = useState('');
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorLastName, setAuthorLastName] = useState('');
  const [authors, setAuthors] = useState([{}]);
  const updateReleaseYear = (e) => {
    setReleaseYear(e.target.value);
  };
  const handleAuthorNameChange = (e, index) => {
    authors[index].name = e.target.value;
    setAuthors(authors);
  };
  const handleAuthorSurNameChange = (e, index) => {
    authors[index].surname = e.target.value;
    setAuthors(authors);
  };
  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const createNew = async (e) => {
    e.preventDefault();
    console.log(authors);
    let body = {
      id: 0,
      title: title,
      publicationDate: releaseYear + '-' + '01' + '-' + '01',
      authors: authors,
    };
    console.log(body);
    await axios({
      url: 'https://elib-hybrid.azurewebsites.net/api/books/create',
      method: 'POST',
      withCredentials: true,
      data: body,
    })
      .then((res) => {
        console.log(res);
        history.push('/panel');
      })
      .catch((err) => {
        if (err.response.status == 401) {
          logOutUser();
          history.push('/login');
        }
      });
  };
  const appendAuthor = (e) => {
    setAuthors([...authors, {}]);
  };
  const removeAuthor = (index) => {
    authors.splice(index, 1);
    setAuthors([...authors]);
  };
  return (
    <div className='custom-start-users'>
      <div className='custom-form'>
        <Col>
          <div className='custom-form-header'>
            <h2>Dodaj Książkę</h2>
          </div>
          <Form onSubmit={createNew}>
            {authors.map((author, index) => {
              return (
                <Form.Group key={index}>
                  <Form.Label>Imię i Nazwisko {index + 1}. Autora</Form.Label>
                  <Form.Control
                    className={'my-2'}
                    type='text'
                    onChange={(e) => {
                      handleAuthorNameChange(e, index);
                    }}
                    value={author.name}
                    placeholder='Wprowadź imię autora'
                  />
                  <Form.Control
                    className={'my-2'}
                    value={author.surname}
                    type='text'
                    onChange={(e) => {
                      handleAuthorSurNameChange(e, index);
                    }}
                    placeholder='Wprowadź nazwisko autora'
                  />
                  <Button onClick={() => removeAuthor(index)}>Usuń</Button>
                </Form.Group>
              );
            })}
            <Form.Group>
              <Button type='button' onClick={(e) => appendAuthor(e)}>
                Dodaj
              </Button>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tytuł</Form.Label>
              <Form.Control
                value={title}
                onChange={updateTitle}
                placeholder='Wprowadź tytuł'
              />
            </Form.Group>
            <Form.Group>
              <Form.Control as='select' custom onChange={updateReleaseYear}>
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button type='submit'>Dodaj</Button>
          </Form>
        </Col>
      </div>
      <Logo />
    </div>
  );
};
export default NewBook;
