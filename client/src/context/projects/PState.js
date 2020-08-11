import React, { useReducer } from "react";
import PContext from "./pContext";
import PReducer from "./pReducer";
import axios from "axios";
import {
  GET_PROJECTS,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ADD_PROJECT,
} from "../types";

const PState = (props) => {
  const initialState = {
    errormsg: null,
    projects: null,
  };

  const [state, dispatch] = useReducer(PReducer, initialState);
  //get
  const getProjects = async () => {
    try {
      const res = await axios.get("/api/projects");
      dispatch({ type: GET_PROJECTS, payload: res.data });
    } catch (error) {
      console.log(error.msg);
    }
  };
  //add
  const addProject = async (project) => {
    let config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await axios.post("/api/projects", project, config);
      dispatch({ type: ADD_PROJECT, payload: res.data });
    } catch (error) {
      console.log(error.msg);
    }
  };
  //edit
  const editProject = async (project) => {
    let config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await axios.put(
        `/api/projects/${project.id}`,
        project,
        config
      );
      dispatch({ type: EDIT_PROJECT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  //delete
  const deleteProject = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      dispatch({ type: DELETE_PROJECT, payload: id });
    } catch (error) {
      console.log(error.msg);
    }
  };
  return (
    <PContext.Provider
      value={{
        projects: state.projects,
        addProject,
        editProject,
        getProjects,
        deleteProject,
      }}
    >
      {props.children}
    </PContext.Provider>
  );
};

export default PState;
