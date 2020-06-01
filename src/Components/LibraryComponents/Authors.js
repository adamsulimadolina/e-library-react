import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Authors = () => {
  const [authors, getAuthors] = useState([]);
  useEffect(() => {}, []);
  function formatAuthors() {}
  return (
    <Container>
      <Row>{authors.map((author) => {})}</Row>
    </Container>
  );
};
