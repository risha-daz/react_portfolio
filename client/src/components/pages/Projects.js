import React, { useEffect, useContext } from "react";
import ProjectList from "../layout/projects/ProjectList";
import AppContext from "../../context/app/appContext";
import PContext from "../../context/projects/pContext";
import AddProject from "../layout/projects/AddProject";
const Projects = () => {
  const pContext = useContext(PContext);
  const appContext = useContext(AppContext);
  useEffect(() => {
    pContext.getProjects();

    //eslint-disable-next-line
  }, []);
  return (
    <div className='bg-white container mx-auto md:pt-4 p-2 md:p-16 w-11/12 shadow-2xl'>
      <h3 className='sm:text-6xl text-4xl p-10 text-center uppercase font-bold'>
        Our Projects
      </h3>
      {pContext.projects && <ProjectList />}
      {appContext.currentUser && <AddProject />}
    </div>
  );
};

export default Projects;
