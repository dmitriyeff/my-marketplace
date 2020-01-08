import React, { Fragment, useState } from "react";
import { Form, Col, Row, Button, ButtonToolbar, InputGroup } from "react-bootstrap";
import GoBackButton from "../buttons/GoBack";

import "./styles.scss";

const AppForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Fragment>
            <div>
                <Form className="form-st"
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                >
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>App name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name your app"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                as="textarea"
                                placeholder="Add app description"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit"
                            variant="outline-primary"
                    >
                        Submit form
                    </Button>
                </Form>
                <GoBackButton />
            </div>
        </Fragment>
    );
};

export default AppForm;
