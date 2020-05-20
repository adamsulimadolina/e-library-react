import React, { useState } from 'react';
import axios from 'axios';
const NewBook = () => {
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
  };
  return (
    <div>
      <form onSubmit={createNew}>
        <input
          type='text'
          value={authorName}
          onChange={updateAuthorName}
        ></input>
        <input
          type='text'
          value={authorLastName}
          onChange={updateAuthorLastName}
        ></input>
        <input type='text' value={title} onChange={updateTitle}></input>
        <input
          type='text'
          value={releaseYear}
          onChange={updateReleaseYear}
        ></input>
        <button type='submit'></button>
      </form>
    </div>
  );
};
export default NewBook;
