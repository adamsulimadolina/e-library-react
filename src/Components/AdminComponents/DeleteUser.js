import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
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
        <div>
          <h1>Usuń użytkownika {match.params.id}</h1>
          <form onSubmit={deleteUser}>
            <input value={adminPassword} onChange={updateAdminPassword}></input>
            <button type='submit'>Usuń</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default DeleteUser;
