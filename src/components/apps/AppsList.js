import React, { Fragment } from "react";
import Cards from "../../components/cards/Card";
import { CardDeck } from "react-bootstrap";
import apps from "../../assets/apps";
import CreateAppButton from "../buttons/CreateAppButton";

import AppContext from "../../context/app-context";

const AppsList = () => {
    return (
        <Fragment>
            <CardDeck style={{marginBottom: "2rem"}}>
                {apps.map((app, key) => (
                    <AppContext.Provider
                        key={key}
                        value={{
                            title: app.title,
                            description: app.description,
                            image: app.image,
                        }}
                    >
                        <Cards />
                    </AppContext.Provider>
                ))}
            </CardDeck>
            <CreateAppButton />
        </Fragment>
    );
};

export default AppsList;
