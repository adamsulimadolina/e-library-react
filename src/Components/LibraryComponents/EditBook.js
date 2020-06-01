import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
function EditBook({ match }) {
  const [edited, setEdited] = useState(false);
  const [releaseYear, setReleaseYear] = useState('');
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorLastName, setAuthorLastName] = useState('');
  useEffect(() => {
    // axios.get()
  }, []);
  const saveBook = () => {
    //axios.post()
    setEdited(true);
  };
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
  return (
    <div>
      {edited ? (
        <Redirect to='/myCollection' />
      ) : (
        <div>
          <h1>{match.params.id} edytuj</h1>
          <form onSubmit={saveBook}>
            <input onChange={updateTitle} value={title}></input>
            <input onChange={updateAuthorName} value={authorName}></input>
            <input
              onChange={updateAuthorLastName}
              value={authorLastName}
            ></input>
            <input onChange={updateReleaseYear} value={releaseYear}></input>
            <button type='submit'>Zapisz</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default EditBook;
