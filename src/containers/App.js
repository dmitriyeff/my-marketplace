import React, { Component, Fragment } from 'react';
import HeaderContainer from "../components/Header";
import CardsContainer from "../components/CardsView";

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
