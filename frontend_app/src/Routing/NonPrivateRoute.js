import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import userContext from "../context/user/UserContext";

const NonPrivateRoute = ({ component: Component, ...rest }) => {
  const UserContext = useContext(userContext);

  const { user_id } = UserContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        user_id ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default NonPrivateRoute;
