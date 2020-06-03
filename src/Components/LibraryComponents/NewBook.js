import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import { ReactComponent as Logo } from '../Images/adduser.svg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from 'react-bootstrap/FormControl';
const NewBook = () => {
  const [releaseYear, setReleaseYear] = useState(new Date());
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorLastName, setAuthorLastName] = useState('');
  const updateReleaseYear = (e) => {
    console.log(e.target.value);
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
  const createNew = async () => {
    return <Redirect to='/panel' />;
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
              <FormControl
                value={authorName}
                onChange={updateAuthorName}
                placeholder='Wprowadź imię autora'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nazwisko Autora</Form.Label>
              <FormControl
                value={authorLastName}
                onChange={updateAuthorLastName}
                placeholder='Wprowadź nazwisko autora'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tytuł</Form.Label>
              <FormControl
                value={title}
                onChange={updateTitle}
                placeholder='Wprowadź tytuł'
              />
            </Form.Group>
            <Form.Group>
              {
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    style={{ marginRight: 10 + 'px', marginTop: 10 + 'px' }}
                    views={['year']}
                    value={releaseYear}
                    onChange={updateReleaseYear}
                    variant='outlined'
                    label='Rok wydania'
                    maxDate={new Date()}
                    minDate={new Date(1800, 1, 1)}
                  />
                </MuiPickersUtilsProvider>
              }
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
