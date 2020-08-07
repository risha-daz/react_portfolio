import React from "react";
import sample from "../../../sample.jpg";
import { Link } from "react-router-dom";
import AppContext from "../../../context/app/appContext";
const ProjectItem = ({ project }) => {
  const appContext = useContext(AppContext);
  const { name, description, completed, postedby, team, date, _id } = project;
  return (
    <div className='max-w-sm w-full md:max-w-full md:flex mx-auto p-2 md:mx-0 md:px-0'>
      <div
        className='h-48 md:h-auto md:w-48 flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden'
        style={{ backgroundImage: `url(${sample})` }}
        title='project'
      ></div>
      <div className='border-r border-b border-l w-full border-gray-400 md:border-l-0 md:border-t md:border-gray-400 bg-white rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <div className='text-gray-900 font-bold text-xl mb-4'>{name}</div>
          <p className='text-sm text-gray-600 flex items-center mb-2'>
            Team:{" "}
            {team.map((member, index, array) => (
              <span key={index}>
                {"  " + member + (index !== array.length - 1 ? ", " : " ")}
              </span>
            ))}
          </p>
          {description && (
            <p className='text-gray-700 text-base'>{description}</p>
          )}
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='text-sm'>
            <p className='text-gray-900 leading-none'>Posted By {postedby}</p>
            <p className='text-gray-600'>on {date}</p>
          </div>
          <div>
            <span
              className={`p-2 items-center text-white leading-none md:rounded-full flex md:inline-flex rounded-full bg-${
                completed ? "green" : "blue"
              }-500 uppercase px-2 py-1 text-xs font-bold mr-3`}
            >
              {completed ? "Completed" : "Ongoing"}
            </span>
            {appContext.currentUser && (
              <span
                className={`p-2 items-center text-white leading-none md:rounded-full flex md:inline-flex rounded-full bg-${
                  completed ? "green" : "blue"
                }-500 uppercase px-2 py-1 text-xs font-bold mr-3`}
              >
                <Link to={`/project/${_id}`}>Edit</Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
