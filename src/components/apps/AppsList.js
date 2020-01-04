import React from "react";
import Cards from "../../components/cards/Card";
import CardDeck from "react-bootstrap/CardDeck";
import apps from "../../assets/apps";

import AppContext from "../../context/app-context";

const AppsList = () => {
    return (
        <CardDeck>
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
    );
};

export default AppsList;
