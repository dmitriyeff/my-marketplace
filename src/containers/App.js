import React, { Component, Fragment } from 'react';
import HeaderContainer from "../components/HeaderContainer";
import CardsContainer from "../components/CardsContainer";

class App extends Component {
    render() {
        return (
            <Fragment>
                <HeaderContainer />
                <CardsContainer />
            </Fragment>
        );
    }
}

export default App;
