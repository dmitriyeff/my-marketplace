import React, {Fragment, useEffect, useState} from "react";
import Cards from "../../components/cards/Card";
import { CardDeck } from "react-bootstrap";
import apps from "../../assets/apps";
import CreateAppButton from "../buttons/CreateAppButton";

import AppContext from "../../context/app-context";

const AppsList = ({ newApp }) => {

    const appendDataToStorage = (key, value) => {
        let values = JSON.parse(localStorage.getItem(key));

        if (values === null) {
            values = [];
        }

        if (newApp) {
            values.push(value);
        }

        localStorage.setItem(key, JSON.stringify(values));

        return JSON.parse(localStorage.getItem('appData'));
    };

    const initialApps = apps.map(app => {
       return {
           title: app.title,
           description: app.description,
           image: app.image,
       }
    });

    const newApps = appendDataToStorage('appData', newApp).map(app => ({
        title: app[0],
        description: app[1],
    }));

    const allApps = [...initialApps, ...newApps];

    return (
        <Fragment>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <CardDeck style={{
                    marginBottom: "2rem"
                }}>
                    {allApps.map((app, key) => (
                        <AppContext.Provider
                            key={key}
                            value={{
                                title: app.title,
                                description: app.description,
                                image: app.image,
                            }}
                        >
                            <Cards/>
                        </AppContext.Provider>
                    ))}
                </CardDeck>
            </div>
            <CreateAppButton />
        </Fragment>
    );
};

export default AppsList;
