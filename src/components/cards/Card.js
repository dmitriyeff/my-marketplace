import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import {
    Link,
} from "react-router-dom";

import './styles.scss';

const Cards = ({ value }) => {
    const { title, description, image, appId } = value;

    return (
        <Col xs={12} md={4}>
            <Card className="card-st">
                {image &&
                <Card.Img
                    className="card-st--img"
                    variant="top"
                    src={require(`./../../../src/assets/${image}`)}
                    alt={title}
                />}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/apps/${appId}`}>
                        <Button variant="outline-dark">Open</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;
