import React from "react";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import AppsList from "./apps/AppsList";
import AppDetails from "./apps/AppDetails";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const CardsView = () => {

    return (
        <Container>
            <Router>
                <Switch>
                    <Route exact path="/" component={AppsList}>
                        <Redirect from="/" to="/apps"/>
                    </Route>
                    <Route exact path="/apps" component={AppsList} />
                    <Route path="/apps/:id" component={AppDetails} />
                </Switch>
            </Router>
        </Container>
    );
};

export default CardsView;
