import React from "react";
import { Route } from "react-router-dom";

// import NonPrivateRoute from "./NonPrivateRoute";

import IndexPage from "../pages/index";

export default () => {
  return (
    <>
      <Route path="/" exact>
        <IndexPage />
      </Route>
    </>
  );
};
