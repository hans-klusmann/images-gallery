import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={9}>
            <Form.Control
              placeholder="Search for new image..."
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;
