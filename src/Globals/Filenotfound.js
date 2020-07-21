import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const filenotfound = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="12">
          <Alert variant="danger" className="text-center">
            <Alert.Heading>404!!! File Not Found!!!</Alert.Heading>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default filenotfound;
