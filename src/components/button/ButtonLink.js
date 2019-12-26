import React from "react";
import Button from "react-bootstrap/Button";
import AppContext from "../../context/app-context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const ButtonLink = () => {
  return (
      <AppContext.Consumer>
          {context => (
              <Router>
                  <Link to={`apps/${context.link}`}>
                      <Button variant="primary">Open</Button>
                  </Link>
                  {/*<Switch>*/}
                  {/*    <Route path={`/apps/${context.link}`} />*/}
                  {/*</Switch>*/}
              </Router>
          )}
      </AppContext.Consumer>
  );
};

export default ButtonLink;
