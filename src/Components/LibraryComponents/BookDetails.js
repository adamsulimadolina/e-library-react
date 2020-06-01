import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BookDetails = ({ match }) => {
  const [book, setBook] = useState({});
  useEffect(() => {
    console.log(match.params.id);
  }, []);
  return <div>{match.params.id}</div>;
};
export default BookDetails;
