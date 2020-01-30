import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateAppButton = () => {
    return (
        <Fragment>
            <Link to="/create">
                <Button variant="outline-danger">
                    Create an app
                </Button>
            </Link>
        </Fragment>
    )
};

export default CreateAppButton;
