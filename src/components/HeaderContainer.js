import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Icon from './icon/Icon';

const HeaderContainer = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="/">
                <Icon />
                My Marketplace
            </Navbar.Brand>
        </Navbar>
    );
};

export default HeaderContainer;
