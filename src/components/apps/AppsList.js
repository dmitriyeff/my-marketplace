import React, { Fragment } from "react";
import Cards from "../../components/cards/Card";
import { CardDeck } from "react-bootstrap";
import apps from "../../assets/apps";
import CreateAppButton from "../buttons/CreateAppButton";

import AppContext from "../../context/app-context";
// import { getAppInfoFromStorage } from "../form/ValidationForm";

const AppsList = () => {

    const initialApps = apps.map(app => {
       return {
           title: app.title,
           description: app.description,
           image: app.image,
       }
    });

    // const addedApps = getAppInfoFromStorage().map(app => {
    //     return {
    //         title: app[0],
    //         description: app[1],
    //     };
    // });

    const allApps = [...initialApps];

    return (
        <Fragment>
            <CardDeck style={{marginBottom: "2rem"}}>
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
            <CreateAppButton />
        </Fragment>
    );
};

export default AppsList;
