import {
  GOTO_PAGE,
  GET_MEMBERS,
  LOGOUT,
  LOGIN_MEMBER,
  LOAD_DETAILS,
  REGISTER_MEMBER,
  SET_ERROR,
  REMOVE_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GOTO_PAGE:
      return { ...state, title: action.payload };

    case GET_MEMBERS:
      return { ...state, users: action.payload };
    case LOGIN_MEMBER:
    case REGISTER_MEMBER:
      localStorage.setItem("token", action.payload.token);
      return state;
    case LOAD_DETAILS:
      return { ...state, currentUser: action.payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, currentUser: null };
    case SET_ERROR:
      return { ...state, errormsg: action.payload };
    case REMOVE_ERROR:
      return { ...state, errormsg: null };
    default:
      return state;
  }
};
