import React from "react";
import Cards from "../components/cards/Card";
import jsonData from "../assets/apps";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

import AppContext from "../context/app-context";

const CardsContainer = () => {
    return (
        <Container>
            <CardDeck>
                {jsonData.map(app => (
                    <AppContext.Provider
                        key={app.title}
                        value={{
                            title: app.title,
                            description: app.description,
                            image: app.image,
                            link: app.link,
                        }}
                    >
                        <Cards />
                    </AppContext.Provider>
                ))}
            </CardDeck>
        </Container>
    );
};

export default CardsContainer;
