import React, { Fragment } from "react";
import Cards from "../../components/cards/Card";
import { CardDeck } from "react-bootstrap";
import apps from "../../assets/apps";
import CreateAppButton from "../buttons/CreateAppButton";

import AppContext from "../../context/app-context";

const AppsList = ({ newApps }) => {

    const initialApps = apps.map(app => {
       return {
           title: app.title,
           description: app.description,
           image: app.image,
       }
    });

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
