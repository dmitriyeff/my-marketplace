import React, {Fragment} from "react";
import Cards from "../../components/cards/Card";
import apps from "../../assets/apps";

import AppContext from "../../context/app-context";

const AppsList = () => {
    return (
        <Fragment>
            {apps.map((app, key) => (
                <AppContext.Provider
                    key={key}
                    value={{
                        title: app.title,
                        description: app.description,
                        image: app.image,
                    }}
                >
                    <Cards />
                </AppContext.Provider>
            ))}
        </Fragment>
    );
};

export default AppsList;
