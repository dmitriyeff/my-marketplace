import React, { Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";
import apps from "../../assets/apps";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AppDetails = () => {
    const { id } = useParams();

    const history = useHistory();

    const handleButton = () => {
      return history.push("/apps");
    };

    return (
        <Row style={{justifyContent: "center"}}>
            <Col xs={12}
                 md={8}
            >
                { apps.map((app, key) => (
                    <Fragment key={key}>
                        { id === app.title.split(' ').join('-').toLowerCase() &&
                            <div style={{marginTop: "4em"}}>
                                <h2>{app.title}</h2>
                                <img
                                    style={{width: "100%"}}
                                    src={require(`./../../../src/assets/${app.image}`)}
                                    alt={app.title}
                                />
                                <p style={{margin: "2rem 0 2rem 0"}}>
                                    {app.description}
                                </p>
                                <Button variant="outline-dark"
                                        size="lg"
                                        onClick={handleButton}
                                >
                                    Back
                                </Button>
                            </div>}
                    </Fragment>
                ))}
            </Col>
        </Row>
    );
};

export default AppDetails;
