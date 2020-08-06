import { GOTO_PAGE, SHOW_MENU, HIDE_MENU } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GOTO_PAGE:
      return { ...state, title: action.payload };
    case SHOW_MENU:
      return { ...state, menu: "show" };
    case HIDE_MENU:
      return { ...state, menu: "hide" };
    default:
      return state;
  }
};
