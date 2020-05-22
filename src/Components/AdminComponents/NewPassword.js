import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
function NewPassword() {
  const [resetValue, SetResetValue] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const newPassword = async () => {
    //await axios.post();
    SetResetValue(true);
  };
  return (
    <div>
      {resetValue ? (
        <Redirect to='/panel' />
      ) : (
        <form onSubmit={newPassword}>
          <input
            type='password'
            value={password}
            onChange={updatePassword}
          ></input>
          <input
            type='password'
            value={confirmPassword}
            onChange={updateConfirmPassword}
          ></input>
          <button type='submit'>Nowe Hasło</button>
        </form>
      )}
    </div>
  );
}
export default NewPassword;
