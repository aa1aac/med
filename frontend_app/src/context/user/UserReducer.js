import { GET_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case SIGNUP_USER:
      return { ...state, key: action.payload };
    case GET_USER:
      return { ...state, ...action.payload };
    case LOGOUT_USER:
      return {
        ...state,
        email: null,
        user_id: null,
        username: null,
        blood_group: null,
      };
    default:
      return state;
  }
};
