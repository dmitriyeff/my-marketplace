import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import apps from "../../assets/apps";
import { Container, Row, Col } from "react-bootstrap";

const AppDetails = () => {
    const { id } = useParams();

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
                            <h4 style={{marginTop: "2rem"}}>
                                {app.description}
                            </h4>
                        </div>}
                    </Fragment>
                ))}
            </Col>
        </Row>
    );
};

export default AppDetails;
