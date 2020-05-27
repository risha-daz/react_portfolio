import React, { useReducer } from "react";
import OverallContext from "./overallContext";
import OverallReducer from "./overallReducer";
import { GOTO_PAGE } from "./types";

const OverallState = (props) => {
  const initialState = {
    title: { name: "Portfolio", url: "/" },
  };

  const [state, dispatch] = useReducer(OverallReducer, initialState);
  const goto = (obj) => {
    console.log(obj);
    dispatch({ type: GOTO_PAGE, payload: obj });
  };
  return (
    <OverallContext.Provider
      value={{
        title: state.title,
        goto,
      }}
    >
      {props.children}
    </OverallContext.Provider>
  );
};

export default OverallState;
