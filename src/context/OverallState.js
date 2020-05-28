import React, { useReducer } from "react";
import OverallContext from "./overallContext";
import OverallReducer from "./overallReducer";
import { GOTO_PAGE, SHOW_MENU, HIDE_MENU } from "./types";

const OverallState = (props) => {
  const initialState = {
    title: { name: "Portfolio", url: "/" },
    menu: "static",
  };

  const [state, dispatch] = useReducer(OverallReducer, initialState);
  const goto = (obj) => {
    dispatch({ type: GOTO_PAGE, payload: obj });
  };
  const showMenu = () => {
    dispatch({ type: SHOW_MENU });
    console.log(state.menu);
  };
  const hideMenu = () => {
    dispatch({ type: HIDE_MENU });
    console.log(state.menu);
  };
  return (
    <OverallContext.Provider
      value={{
        title: state.title,
        menu: state.menu,
        goto,
        showMenu,
        hideMenu,
      }}
    >
      {props.children}
    </OverallContext.Provider>
  );
};

export default OverallState;
