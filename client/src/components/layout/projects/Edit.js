import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../../context/app/appContext";
import PContext from "../../../context/projects/pContext";
import { Link } from "react-router-dom";

const Edit = (props) => {
  const appContext = useContext(AppContext);
  const pContext = useContext(PContext);
  const { currentUser, goto, users, getMembers } = appContext;
  const { projects, addProject, editProject } = pContext;
  const [project, setProject] = useState({
    name: "",
    description: "",
    postedby: "",
    team: null,
    completed: false,
    link: "",
    addmember: "",
  });
  useEffect(() => {
    getMembers();
    if (!currentUser) {
      goto({ name: "Aeromodelling Club", url: "/" });
      props.history.push("/"); //redirect
    }

    if (props.match.params.id !== "add") {
      let myproject = projects.filter(
        (item) => item._id === props.match.params.id
      )[0];
      setProject({
        ...project,
        name: myproject.name,
        description: myproject.description,
        postedby: myproject.postedby,
        team: myproject.team,
        completed: myproject.completed,
        link: myproject.link,
      });
    } else {
      if (currentUser) {
        setProject({
          ...project,
          postedby: currentUser.username,
          team: [currentUser.username],
        });
      } else {
        props.history.push("/");
      }
    }
    //eslint-disable-next-line
  }, [currentUser, props.history]);
  const {
    name,
    description,
    postedby,
    team,
    completed,
    link,
    addmember,
  } = project;
  const onChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (props.match.params.id === "add") {
      await addProject(project);
    } else {
      await editProject(project);
    }
    props.history.push("/projects");
  };
  const addMember = (e) => {
    e.preventDefault();
    if (addmember) {
      team.push(addmember);
    }

    console.log(team);
    setProject({ ...project, team });
  };
  const removeMember = (e) => {
    console.log(e.target.id);
    team.splice(e.target.id, 1);
    console.log(team);
    setProject({ ...project, team });
  };
  const toggleComplete = (e) => {
    setProject({ ...project, completed: !completed });
  };

  return (
    <div className='container mx-auto p-6 md:p-32 w-11/12 shadow bg-white'>
      <h3 className='sm:text-6xl text-4xl mb-6 text-center uppercase font-bold'>
        {props.match.params.id !== "add" ? "Edit" : "Add"} Project
      </h3>
      <form className='w-full max-w-lg mx-auto pt-6'>
        {/* name */}
        <div className='mb-6 '>
          <div>
            <label
              className='block text-gray-500 font-bold mb-1'
              htmlFor='inline-full-name'
            >
              Name of Project
            </label>
          </div>
          <div className='w-full'>
            <div>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500'
                type='text'
                name='name'
                value={name}
                onChange={onChange}
                required
              />
            </div>
          </div>
        </div>
        {/* posted by */}
        <div className='mb-6 '>
          <div>
            <label
              className='block text-gray-500 font-bold mb-1'
              htmlFor='inline-full-name'
            >
              Posted By
            </label>
          </div>
          <div className='w-full'>
            <div>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700'
                type='text'
                value={postedby}
                disabled
              />
            </div>
          </div>
        </div>
        {/* desc */}
        <div className='mb-6 '>
          <div>
            <label
              className='block text-gray-500 font-bold mb-1'
              htmlFor='inline-full-name'
            >
              Description
            </label>
          </div>
          <div className='w-full'>
            <div>
              <textarea
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500'
                name='description'
                value={description}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        {/* link */}
        <div className='mb-6'>
          <div className='relative'>
            <label className='absolute inset-y-0 text-gray-500 font-bold p-2'>
              <i className='fas fa-link'></i>
            </label>

            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 pl-8 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-teal-500'
              type='text'
              name='link'
              onChange={onChange}
              value={link}
              placeholder='Link to Project'
            />
          </div>
        </div>
        {/* team */}
        <div className='mb-6 w-full'>
          <div>
            <label
              className='block text-gray-500 font-bold mb-1'
              htmlFor='inline-full-name'
            >
              Team Members:
            </label>
          </div>
          {team &&
            team.map((member, index) => (
              <div
                key={index}
                className='bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 my-1 rounded relative'
              >
                <span className='block sm:inline'>{member}</span>
                <input
                  className='absolute top-0 border-none bottom-0 right-0 px-4 py-2 text-xl text-gray-600 bg-transparent'
                  type='button'
                  id={index}
                  value='&times;'
                  onClick={removeMember}
                />
              </div>
            ))}
          <div className='w-full flex flex-center mt-4'>
            <label
              className='block text-gray-500 font-bold mb-1 mr-2 ml-0'
              htmlFor='inline-full-name'
            >
              Add Team Members:
            </label>
            <div className=' mr-3 w-full'>
              <select
                className='appearance-none w-full h-full bg-gray-200 border border-gray-200 text-gray-700 p-3 rounded focus:outline-none focus:bg-white focus:border-gray-500'
                value={addmember}
                name='addmember'
                onChange={onChange}
              >
                <option value='' disabled>
                  Add Members...
                </option>
                {users &&
                  users.map((user) => (
                    <option key={user.id} value={user.username}>
                      {user.username}
                    </option>
                  ))}
              </select>
            </div>
            <button
              onClick={addMember}
              className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
            >
              <i className='fa fa-plus'>{"  "}</i>
            </button>
          </div>
        </div>
        {/* complete */}
        <div className='mb-6 flex flex-center'>
          <div className='mr-4'>
            <label
              className='block text-gray-500 font-bold mb-1'
              htmlFor='inline-full-name'
            >
              Complete?
            </label>
          </div>
          <div className='w-full'>
            <input type='checkbox' id='completed' onChange={toggleComplete} />
            <label htmlFor='completed'> Yes!</label>
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <button
            className='shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
            type='button'
            onClick={onSubmit}
          >
            {props.match.params.id !== "add" ? "Edit" : "Add"}
          </button>
          <Link to='/projects'>
            <button className='shadow bg-gray-300 ml-4 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
