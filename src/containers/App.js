import React, { Component, Fragment } from 'react';
import Header from "../components/Header";
import CardsView from "../components/CardsView";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <CardsView />
            </Fragment>
        );
    }
}

export default App;
