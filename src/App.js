import React, { Component, Fragment } from 'react';
import HeaderContainer from "./components/HeaderContainer";
import BodyContainer from "./components/BodyContainer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <BodyContainer />
      </Fragment>
    );
  }
}

export default App;
