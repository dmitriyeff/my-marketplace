import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Icon from "./icon/Icon";

const Header = () => {
    const [state, changeState] = useState(false);

    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <a href="/">
                <Navbar.Brand
                    onMouseEnter={event => changeState(true)}
                    onMouseLeave={event => changeState(false)}
                >
                    <Icon spin={state} />
                    My Marketplace
                </Navbar.Brand>
            </a>
        </Navbar>
    );
};

export default Header;
