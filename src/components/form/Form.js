import React, { Fragment } from "react";
import { Form, Col, Row, Button, ButtonToolbar } from "react-bootstrap";
import GoBackButton from "../buttons/GoBack";

import "./styles.scss";

const AppForm = () => {
    return (
        <Fragment>
            <Form className="form-st" as={Col} md="8">
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Your app name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Example app"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="8" controlId="validationCustom02">
                        <Form.Label>App description</Form.Label>
                        <Form.Control
                            as="textarea" rows="3"
                            required
                            type="text"
                            placeholder="Describe your application"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    </Form.Group>
                </Form.Row>
            </Form>
            <Row
                as={Col}
                md="8"
                style={{
                    margin: "auto",
                    padding: "0"
                }}>
                <ButtonToolbar
                    style={{
                        width: "25%",
                        display: "flex",
                        justifyContent: "space-between"}}
                >
                    <GoBackButton />
                    <Button
                        variant="outline-danger"
                        type="submit"
                    >
                        Submit
                    </Button>
                </ButtonToolbar>
            </Row>
        </Fragment>
    );
};

export default AppForm;
