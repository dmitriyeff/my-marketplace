import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import GoBackButton from "../buttons/GoBack";

const AppDetails = ({ apps }) => {
    let { id } = useParams();
    // find app by id
    const app = apps[id - 1];

    return (
        <Row className="justify-content-md-center">
            <Fragment>
                <div style={{marginTop: "4rem"}}>
                    <h2>{app.title}</h2>
                    {app.image &&
                        <img
                            style={{width: "100%"}}
                            src={require(`./../../../src/assets/${app.image}`)}
                            alt={app.title}
                        />
                    }
                    <p style={{margin: "1rem 0"}}>
                        {app.description}
                    </p>
                    <GoBackButton />
                </div>
            </Fragment>
        </Row>
    );
};

export default AppDetails;
