import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch } from "react-router-dom";

import "./styles.scss";

import Routing from "./Routing";

const App = () => {
  return (
    <Router>
      <Switch>
        <Routing />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
