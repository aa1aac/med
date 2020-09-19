import React, { useContext, useEffect } from "react";

import userContext from "../context/user/UserContext";

import NonPrivateRoute from "./NonPrivateRoute";
import PrivateRoute from "./PrivateRoute";

import IndexPage from "../pages/index";
import HomePage from "../pages/home";

export default () => {
  const UserContext = useContext(userContext);

  useEffect(() => {
    UserContext.getUser();
  }, []);

  return (
    <>
      <NonPrivateRoute path="/" exact component={IndexPage} />
      <PrivateRoute path="/" exact component={HomePage} />
    </>
  );
};
