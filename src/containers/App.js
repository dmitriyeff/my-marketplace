import React, { Component, Fragment } from 'react';
import HeaderContainer from "../components/HeaderContainer";
import BodyContainer from "../components/BodyContainer";
import jsonData from '../assets/apps.json';
import AppContext from "../context/app-context";

class App extends Component {
    render() {
        return (
            <Fragment>
                <HeaderContainer />
                {jsonData.map(app => (
                    <AppContext.Provider
                        key={app.id}
                        value={{
                            title: app.title,
                            description: app.description,
                            image: app.image
                        }}
                    >
                        <BodyContainer />
                    </AppContext.Provider>
                ))}
            </Fragment>
        );
    }
}

export default App;
