import React, { useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

import setAuthToken from "../../utils/setToken";
import { GET_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from "../types";

const UserState = (props) => {
  let initialState = {
    email: null,
    user_id: null,
    full_name: null,
    blood_group: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const userLogin = ({ email, password }) => {
    axios
      .post("/api/v1/user/login/", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.key) {
          dispatch({ type: LOGIN_USER, payload: res.data.key });
          localStorage.setItem("token", res.data.key);
          getUser();
          toast.success("user logged in!");
        }
      })
      .catch((e) => {
        toast.error("invalid email or password");
        console.error(e);
      });
  };

  const getUser = () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    axios
      .get("/api/v1/user/me/")
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const userLogout = () => {
    axios
      .post("/api/v1/logout/")
      .then(() => {
        dispatch({ type: LOGOUT_USER });
        localStorage.removeItem("token");
        setAuthToken(localStorage.token);
        toast.success("user logged out");
      })
      .catch((e) => {
        console.error(e);
        toast.error("some error occured while logging out");
      });
  };

  const userSignup = ({ email, password1, password2, full_name }) => {
    axios
      .post("/api/v1/user/signup/", {
        email,
        password1,
        password2,
        full_name,
      })
      .then((res) => {
        dispatch({ type: SIGNUP_USER, payload: res.data.key });
        localStorage.setItem("token", res.data.key);
        getUser();
        toast.success("user signed up!");
      })
      .catch((e) => {
        if (e.response) {
          let errors = e.response.data;

          if (errors.email) {
            toast.error(errors.email[0]);
          }
          if (errors.non_field_errors) {
            toast.error(errors.non_field_errors[0]);
          }
          if (errors.password1) {
            toast.error(errors.password1[0]);
          }
        }

        console.error(e);
      });
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        getUser,
        userLogout,
        userSignup,
        email: state.email,
        user_id: state.user_id,
        full_name: state.full_name,
        blood_group: state.blood_group,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
