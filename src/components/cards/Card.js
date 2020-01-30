import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
    Link,
} from "react-router-dom";

import './styles.scss';

const Cards = ({ value }) => {
    const { title, description, image, appId } = value;

    return (
        <Card className="card-st"
              style={{
                  minWidth: '18rem',
                  maxWidth: '20rem'
              }}
        >
            {image &&
                <Card.Img
                    className="card-st--img"
                    variant="top"
                    src={require(`./../../../src/assets/${image}`)}
                    alt={title}
                />}
            <Card.Body style={{minWidth: "20rem"}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={`/apps/${appId}`}>
                    <Button variant="outline-dark">Open</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Cards;
