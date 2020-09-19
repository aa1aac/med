import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./component/Navbar/Navbar";
import UserState from "./context/user/UserState";

import Routing from "./Routing";

const App = () => {
  return (
    <UserState>
      <ToastContainer autoClose={5000} />
      <Router>
        <Navbar />
        <Switch>
          <Routing />
        </Switch>
      </Router>
    </UserState>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
