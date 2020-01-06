import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import apps from "../../assets/apps";
import { Row, Col } from "react-bootstrap";
import GoBackButton from "../buttons/GoBack";

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
                            <div style={{marginTop: "4rem"}}>
                                <h2>{app.title}</h2>
                                <img
                                    style={{width: "100%"}}
                                    src={require(`./../../../src/assets/${app.image}`)}
                                    alt={app.title}
                                />
                                <p style={{margin: "1rem 0"}}>
                                    {app.description}
                                </p>
                                <GoBackButton />
                            </div>}
                    </Fragment>
                ))}
            </Col>
        </Row>
    );
};

export default AppDetails;
