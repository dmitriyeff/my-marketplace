import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Icon from './icon/Icon';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


const HeaderContainer = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Router>
                <Link to="/apps">
                    <Navbar.Brand>
                        <Icon />
                        My Marketplace
                    </Navbar.Brand>
                </Link>
            </Router>
        </Navbar>
    );
};

export default HeaderContainer;
