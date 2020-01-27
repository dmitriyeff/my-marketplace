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

    let [data, updatedData] = useState(0);

    const parentFunction = (dataFromChild) => {
        updatedData(dataFromChild);
    };

    return (
        <Container>
            <Router>
                <Route exact path="/" component={AppsList}>
                    <Redirect from="/" to="/apps"/>
                </Route>
                <Route exact path="/apps">
                    <AppsList newApp={data} />
                </Route>
                <Route path="/apps/create">
                    <ValidationForm functionCallFromParent={parentFunction} />
                </Route>
                <Route path="/apps/:id" component={AppDetails} />
            </Router>
        </Container>
    );
};

export default CardsView;
