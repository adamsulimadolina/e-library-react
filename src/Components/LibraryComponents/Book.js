import React from 'react';
const Book = ({ authorName, authorLastName, title, releaseYear }) => {
  return (
    <div>
      <h4>Imie:{authorName}</h4>
      <h4>Nazwisko:{authorLastName}</h4>
      <h4>Tytuł:{title}</h4>
      <h4>Data wydania:{releaseYear}</h4>
    </div>
  );
};
export default Book;
