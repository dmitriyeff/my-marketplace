import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const Icon = ({ spin }) => {
    return (
        <FontAwesomeIcon
            className="icon"
            icon={faGlobe}
            size="lg"
            pulse={spin}
        />
    );
};

export default Icon;
