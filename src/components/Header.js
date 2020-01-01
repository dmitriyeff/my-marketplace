import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Icon from "./icon/Icon";

import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route
} from "react-router-dom";


const Header = () => {
    const [state, changeState] = useState(false);

    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Router>
                <Link to="/apps">
                    <Navbar.Brand
                        onMouseEnter={event => changeState(true)}
                        onMouseLeave={event => changeState(false)}
                    >
                        <Icon spin={state} />
                        My Marketplace
                    </Navbar.Brand>
                </Link>
                <Route>
                    <Redirect exact from="/" to="/apps" />
                </Route>
            </Router>
        </Navbar>
    );
};

export default Header;
