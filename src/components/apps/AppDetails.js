import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import apps from "../../assets/apps";

const AppDetails = () => {
    const { id } = useParams();

    return (
        <Fragment>
            { apps.map((app, key) => (
                <Fragment key={key}>
                    { id === app.title.split(' ').join('-').toLowerCase() &&
                    <div style={{marginTop: "4em"}}>
                        <h2>{app.title}</h2>
                        <img
                            style={{width: "100%"}}
                            src={require(`./../../../src/assets/${app.image}`)}
                            alt=""
                        />
                        <h4 style={{marginTop: "2rem"}}>{app.description}</h4>
                    </div>}
                </Fragment>
            ))}
        </Fragment>
    );
};

export default AppDetails;
