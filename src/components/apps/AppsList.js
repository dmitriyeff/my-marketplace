import React, { Fragment } from "react";
import Cards from "../../components/cards/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CreateAppButton from "../buttons/CreateAppButton";
import Container from "react-bootstrap/Container";

const AppsList = ({ apps }) => {

    return (
        <Fragment>
            <Container>
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
                <CreateAppButton />
            </Container>
        </Fragment>
    );
};

export default AppsList;
