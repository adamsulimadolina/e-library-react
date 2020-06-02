import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../Images/delete.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
function DeleteUser({ match }) {
  const [deleteState, setDeleteState] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const updateAdminPassword = (e) => {
    setAdminPassword(e.target.value);
  };
  const deleteUser = async () => {
    // await axios.post();
    setDeleteState(true);
  };
  return (
    <div>
      {deleteState ? (
        <Redirect to='/panel' />
      ) : (
        <div className='custom-start'>
          <div className='custom-form'>
            <Col>
              <div className='custom-form-header'>
                <h2>Usuń użytkownika: {match.params.id}</h2>
              </div>
              <Form onSubmit={deleteUser}>
                <Form.Group>
                  <Form.Label>Hasło Administratora</Form.Label>
                  <Form.Control
                    value={adminPassword}
                    onChange={updateAdminPassword}
                    type='text'
                    placeholder='Podaj Hasło'
                  />
                </Form.Group>
                <Button type='submit'>Usuń</Button>
              </Form>
            </Col>
          </div>
          <Logo />
        </div>
      )}
    </div>
  );
}
export default DeleteUser;
