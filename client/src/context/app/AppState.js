import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import setAuthToken from "../../setAuthToken";
import {
  GOTO_PAGE,
  GET_MEMBERS,
  LOGIN_MEMBER,
  LOAD_DETAILS,
  REGISTER_MEMBER,
  LOGOUT,
  SET_ERROR,
  REMOVE_ERROR,
} from "../types";
import axios from "axios";
const AppState = (props) => {
  const initialState = {
    title: { name: "Aeromodelling Club", url: "/" },
    errormsg: null,
    users: null,
    currentUser: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const goto = (obj) => {
    dispatch({ type: GOTO_PAGE, payload: obj });
  };

  //get users
  const getMembers = async () => {
    try {
      const res = await axios.get("/api/users");

      dispatch({ type: GET_MEMBERS, payload: res.data });
    } catch (error) {
      console.log(error.msg);
    }
  };

  //load details of logged in user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: LOAD_DETAILS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.msg);
    }
  };

  //login user
  const loginMember = async (user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth", user, config);
      dispatch({ type: LOGIN_MEMBER, payload: res.data });
      loadUser();
    } catch (err) {
      addError({ type: "Error", color: "red", msg: err.response.data.msg });
    }
  };

  //register user
  const registerMember = async (member) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", member, config);
      dispatch({ type: REGISTER_MEMBER, payload: res.data });
      loadUser();
    } catch (error) {
      addError({ type: "error", color: "red", msg: error.response.data.msg });
    }
  };

  //logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  //set error
  const addError = (err) => {
    dispatch({ type: SET_ERROR, payload: err });
  };
  //dismiss error
  const removeErrors = () => {
    dispatch({ type: REMOVE_ERROR });
  };
  return (
    <AppContext.Provider
      value={{
        title: state.title,

        users: state.users,
        currentUser: state.currentUser,
        errormsg: state.errormsg,
        goto,

        getMembers,
        loadUser,
        loginMember,
        registerMember,
        logout,
        removeErrors,
        addError,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
