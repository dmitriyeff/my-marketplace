import React, { Fragment } from "react";
import Cards from "../../components/cards/Card";

const AppsList = ({ value }) => {

    return (
        <Fragment>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Cards value={value} />
            </div>
        </Fragment>
    );
};

export default AppsList;
