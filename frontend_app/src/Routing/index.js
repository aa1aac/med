import React from "react";
import { Route } from "react-router-dom";

// import NonPrivateRoute from "./NonPrivateRoute";

import IndexPage from "../pages/index";
import AuthPage from "../pages/auth";

export default () => {
  return (
    <>
      <Route path="/auth" exact component={AuthPage} />

      <Route path="/" exact>
        <IndexPage />
      </Route>
    </>
  );
};
