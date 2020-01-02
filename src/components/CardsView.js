import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import AppsList from "./apps/AppsList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const CardsView = () => {

    return (
        <Container>
            <CardDeck>
                <Router>
                    <Switch>
                        <Route exact path="/apps" component={AppsList} />
                    </Switch>
                </Router>
            </CardDeck>
        </Container>
    );
};

export default CardsView;
