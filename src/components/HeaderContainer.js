import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Icon from './icon/Icon';

import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route
} from "react-router-dom";


const HeaderContainer = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Router>
                <Link to="apps">
                    <Navbar.Brand>
                        <Icon />
                        My Marketplace
                    </Navbar.Brand>
                </Link>
                <Route>
                    <Redirect exact from="/" to="apps" />
                </Route>
            </Router>
        </Navbar>
    );
};

export default HeaderContainer;
