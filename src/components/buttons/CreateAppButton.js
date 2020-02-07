import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateAppButton = () => {
    return (
        <Fragment>
            <Link to="/create">
                <div style={{padding: "15px"}}>
                    <Button variant="outline-danger">
                        Create an app
                    </Button>
                </div>
            </Link>
        </Fragment>
    )
};

export default CreateAppButton;
