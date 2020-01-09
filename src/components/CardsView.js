import React from "react";
import Container from "react-bootstrap/Container";
import AppsList from "./apps/AppsList";
import AppDetails from "./apps/AppDetails";
import ValidationForm from "./form/ValidationForm";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

const CardsView = () => {

    return (
        <Container>
            <Router>
                <Route exact path="/" component={AppsList}>
                    <Redirect from="/" to="/apps"/>
                </Route>
                <Route exact path="/apps" component={AppsList} />
                <Route path="/apps/create" component={ValidationForm} />
                <Route path="/apps/:id" component={AppDetails} />
            </Router>
        </Container>
    );
};

export default CardsView;
