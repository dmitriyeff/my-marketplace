import React, {useEffect, useState} from "react";
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

    const parentFunction = (data_from_child) => {
        updatedState(data_from_child);
    };

    let [state, updatedState] = useState();

    useEffect(() => {
        console.log(state);
    });

    return (
        <Container>
            <Router>
                <Route exact path="/" component={AppsList}>
                    <Redirect from="/" to="/apps"/>
                </Route>
                <Route exact path="/apps" component={AppsList} />
                <Route path="/apps/create">
                    <ValidationForm functionCallFromParent={parentFunction} />
                </Route>
                <Route path="/apps/:id" component={AppDetails} />
            </Router>
        </Container>
    );
};

export default CardsView;
