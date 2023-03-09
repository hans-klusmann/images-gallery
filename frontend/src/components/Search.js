import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Search = ({handleSubmit}) => {
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={9}>
            <Form.Control placeholder="Search for new image..." />
          </Col>
          <Col>
            <Button variant="primary" type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;
