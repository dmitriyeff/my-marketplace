import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import AppContext from "../../context/app-context";
import {
    Link,
} from "react-router-dom";


const ButtonLink = () => {
    const { title } = useContext(AppContext);
    const pathname = title.split(' ').join('-').toLowerCase();

    return (
        <Link to={`/apps/${pathname}`}>
            <Button variant="outline-dark">Open</Button>
        </Link>
    );
};

export default ButtonLink;
