import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
function DeleteUser() {
  const [deleteState, setDeleteState] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const updateAdminPassword = (e) => {
    setPassword(e.target.value);
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
        <form onSubmit={deleteUser}>
          <input value={adminPassword} onChange={updateAdminPassword}></input>
          <button type='submit'></button>
        </form>
      )}
    </div>
  );
}
