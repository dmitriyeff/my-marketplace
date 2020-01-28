import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import AppsList from "./apps/AppsList";
import AppDetails from "./apps/AppDetails";
import ValidationForm from "./form/ValidationForm";
import apps from "../assets/apps";
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

    const initialApps = apps.map(app => {
        return {
            title: app.title,
            description: app.description,
            image: app.image,
        }
    });

    return (
        <Container>
            <Router>
                <Route exact path="/" component={AppsList}>
                    <Redirect from="/" to="/apps"/>
                </Route>
                <Route exact path="/apps">
                    <AppsList
                        newApps={getNewAppsFromStorage}
                        initialApps={initialApps}
                    />
                </Route>
                <Route path="/apps/create">
                    <ValidationForm functionCallFromParent={parentFunction} />
                </Route>
                <Route path="/apps/:id">
                    <AppDetails
                        newApps={getNewAppsFromStorage}
                        initialApps={initialApps}
                    />
                </Route>
            </Router>
        </Container>
    );
};

export default CardsView;
