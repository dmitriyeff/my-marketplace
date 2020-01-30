import React, { Fragment } from "react";
import Cards from "../../components/cards/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CreateAppButton from "../buttons/CreateAppButton";

const AppsList = ({ apps }) => {

    return (
        <Fragment>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <CardDeck style={{marginBottom: "2rem"}}>
                {apps.map((app, key) => (
                    <Cards
                        key={key}
                        value={{
                            title: app.title,
                            description: app.description,
                            image: app.image,
                            appId: app.appId,
                        }}
                    />
                ))}
                </CardDeck>
            </div>
            <CreateAppButton />
        </Fragment>
    );
};

export default AppsList;
