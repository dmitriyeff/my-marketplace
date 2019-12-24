import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AppContext from "../../context/app-context";

import './styles.scss';

const Cards = () => {
    return (
      <AppContext.Consumer>
          {context => (
              <Card className="card">
                  {
                      <Card.Img variant="top" src="" />}
                  <Card.Body>
                      <Card.Title>{context.title}</Card.Title>
                      <Card.Text>{context.description}</Card.Text>
                      <Button variant="primary">Go</Button>
                  </Card.Body>
              </Card>)}
      </AppContext.Consumer>
    );
};

export default Cards;
