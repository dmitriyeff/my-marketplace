import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const GoBack = () => {
    const history = useHistory();

    const handleButton = () => {
        return history.push("/apps");
    };

    return (
        <Button variant="outline-dark"
                size="md"
                onClick={handleButton}
        >
            Back Button
        </Button>
    );
};

export default GoBack;
