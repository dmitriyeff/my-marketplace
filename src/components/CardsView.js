import React from "react";
import Container from "react-bootstrap/Container";
import AppsList from "./apps/AppsList";
import AppDetails from "./apps/AppDetails";
import AppForm from "./form/Form";
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
                <Route path="/apps/create" component={AppForm} />
                <Route path="/apps/:id" component={AppDetails} />
            </Router>
        </Container>
    );
};

export default CardsView;
