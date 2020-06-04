import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../Images/delete.svg';
import { UserContext } from '../UserComponents/UserContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
function DeleteUser({ match }) {
  const history = useHistory();
  const [deleteState, setDeleteState] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [loggedIn, googleUser, userRole, logInUser, logOutUser] = useContext(
    UserContext
  );
  const updateAdminPassword = (e) => {
    setAdminPassword(e.target.value);
  };
  const deleteUser = async (e) => {
    e.preventDefault();
    await axios({
      url:
        'https://elib-hybrid.azurewebsites.net/api/users/delete?id=' +
        match.params.id,
      method: 'DELETE',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setDeleteState(true);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          logOutUser();
          history.push('/login');
        }
      });
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
                    type='password'
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
