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

    const appendDataToStorage = (key, value) => {
        let values = JSON.parse(localStorage.getItem(key));

        if (values === null) {
            values = [];
        }

        if (data) {
            values.push(value);
        }

        localStorage.setItem(key, JSON.stringify(values));

        return JSON.parse(localStorage.getItem('appData'));
    };

    const getNewAppsFromStorage = appendDataToStorage('appData', data).map(app => ({
        title: app[0],
        description: app[1],
    }));

    return (
        <Container>
            <Router>
                <Route exact path="/" component={AppsList}>
                    <Redirect from="/" to="/apps"/>
                </Route>
                <Route exact path="/apps">
                    <AppsList newApps={getNewAppsFromStorage} />
                </Route>
                <Route path="/apps/create">
                    <ValidationForm functionCallFromParent={parentFunction} />
                </Route>
                <Route path="/apps/:id">
                    <AppDetails newApps={getNewAppsFromStorage} />
                </Route>
            </Router>
        </Container>
    );
};

export default CardsView;
