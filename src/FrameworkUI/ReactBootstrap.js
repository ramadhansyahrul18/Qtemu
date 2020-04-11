import React from "react";
import { Navbar, Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const ReactBootstrap = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>React Bootstrap</Navbar.Brand>
      </Navbar>
      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReactBootstrap;
