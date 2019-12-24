import React, { Component, Fragment } from 'react';
import HeaderContainer from "../components/HeaderContainer";
import Cards from "../../src/components/cards/Card";

import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import jsonData from "../assets/apps.json";

import AppContext from "../context/app-context";

class App extends Component {
    render() {
        return (
            <Fragment>
                <HeaderContainer />
                <Container>
                    <CardDeck>
                    {jsonData.map(app => (
                        <AppContext.Provider
                            key={app.id}
                            value={{
                                title: app.title,
                                description: app.description,
                                image: app.image
                            }}
                        >
                            <Cards />
                        </AppContext.Provider>
                    ))}
                    </CardDeck>
                </Container>
            </Fragment>
        );
    }
}

export default App;
