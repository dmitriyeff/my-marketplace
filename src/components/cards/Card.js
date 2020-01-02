import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import ButtonLink from "../button/ButtonLink";
import AppContext from "../../context/app-context";

import './styles.scss';

const Cards = () => {
    let { image, title, description } = useContext(AppContext);

    return (
        <Card className="card-st">
            <Card.Img
                variant="top"
                src={require(`./../../../src/assets/${image}`)}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <ButtonLink />
            </Card.Body>
        </Card>
    );
};

export default Cards;
