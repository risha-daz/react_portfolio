import { GOTO_PAGE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GOTO_PAGE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
