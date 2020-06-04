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
  const updateReleaseYear = (e) => {
    setReleaseYear(e.target.value);
  };
  const updateAuthorName = (e) => {
    setAuthorName(e.target.value);
  };
  const updateAuthorLastName = (e) => {
    setAuthorLastName(e.target.value);
  };
  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const createNew = async (e) => {
    e.preventDefault();
    let authorsArray = [{ name: authorName, surname: authorLastName }];
    console.log(releaseYear);
    let body = {
      id: 0,
      title: title,
      publicationDate: releaseYear + '-' + '01' + '-' + '01',
      authors: authorsArray,
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
        return <Redirect to='/panel' />;
      })
      .catch((err) => {
        if (err.response.status == 401) {
          logOutUser();
          history.push('/login');
        }
      });
  };
  return (
    <div className='custom-start'>
      <div className='custom-form'>
        <Col>
          <div className='custom-form-header'>
            <h2>Dodaj Książkę</h2>
          </div>
          <Form onSubmit={createNew}>
            <Form.Group>
              <Form.Label>Imię Autora</Form.Label>
              <Form.Control
                value={authorName}
                onChange={updateAuthorName}
                placeholder='Wprowadź imię autora'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nazwisko Autora</Form.Label>
              <Form.Control
                value={authorLastName}
                onChange={updateAuthorLastName}
                placeholder='Wprowadź nazwisko autora'
              />
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
