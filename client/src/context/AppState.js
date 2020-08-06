import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { GOTO_PAGE, SHOW_MENU, HIDE_MENU } from "./types";

const AppState = (props) => {
  const initialState = {
    title: { name: "Aeromodelling Club", url: "/" },
    menu: "desktop",
    projects: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
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
    <AppContext.Provider
      value={{
        title: state.title,
        menu: state.menu,
        projects: state.projects,
        goto,
        showMenu,
        hideMenu,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
