import {
  GET_PROJECTS,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ADD_PROJECT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((item) => item._id !== action.payload),
      };
    case EDIT_PROJECT:
      return {
        ...state,
        projects: state.projects.map((item) =>
          item._id !== action.payload._id ? item : action.payload
        ),
      };
    case ADD_PROJECT:
      return { ...state, projects: [action.payload, ...state.projects] };
    default:
      return state;
  }
};
