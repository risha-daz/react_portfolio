import React, { useContext, Fragment } from "react";
import PContext from "../../../context/projects/pContext";
import ProjectItem from "./ProjectItem";
const ProjectList = () => {
  const pContext = useContext(PContext);
  const { projects } = pContext;
  return (
    <Fragment>
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </Fragment>
  );
};

export default ProjectList;
