import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AppContext from "../../context/app-context";

import './styles.scss';

const Cards = () => {
    return (
        <Card className="card">
            <AppContext.Consumer>
                {context => (
                    <Fragment>
                        <Card.Img
                            variant="top"
                            src={require(`./../../../src/assets/${context.image}`)}
                        />
                        <Card.Body>
                            <Card.Title>{context.title}</Card.Title>
                            <Card.Text>{context.description}</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Fragment>
                )}
            </AppContext.Consumer>
        </Card>
    );
};

export default Cards;
