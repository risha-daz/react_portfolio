import React from "react";
import { Link } from "react-router-dom";

const AddProject = () => {
  return (
    <div className='max-w-sm w-full md:max-w-full md:flex mx-auto p-2 md:mx-0 md:px-0'>
      <div className='border w-full border-gray-400 md:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal'>
        <Link to='/project/add'>Add Project</Link>
      </div>
    </div>
  );
};

export default AddProject;
