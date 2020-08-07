import {
  GOTO_PAGE,
  SHOW_MENU,
  SHOW_NAV,
  GET_MEMBERS,
  LOGOUT,
  LOGIN_MEMBER,
  LOAD_DETAILS,
  REGISTER_MEMBER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GOTO_PAGE:
      return { ...state, title: action.payload };
    case SHOW_MENU:
      return { ...state, menu: "mobile" };
    case SHOW_NAV:
      return { ...state, menu: "desktop" };
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
    default:
      return state;
  }
};
