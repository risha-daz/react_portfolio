import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../context/app/appContext";
import Alert from "../Alert";
const Register = (props) => {
  const appContext = useContext(AppContext);
  const { currentUser, goto, registerMember, addError } = appContext;
  useEffect(() => {
    if (currentUser) {
      goto({ name: "Aeromodelling Club", url: "/" });
      props.history.push("/"); //redirect
    }
    //eslint-disable-next-line
  }, [currentUser, props.history]);

  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
    github: "",
    linkedin: "",
    email: "",
  });

  const { username, password, password2, github, linkedin, email } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      addError({
        type: "error",
        color: "red",
        msg: "Password must be at least 6 charachters",
      });
    } else if (password !== password2) {
      addError({ type: "Error", color: "red", msg: "Passwords do not match" });
    } else {
      registerMember(user);
    }
  };

  return (
    <div className='container mx-auto p-6 md:p-32 w-11/12 shadow bg-white'>
      <h3 className='sm:text-6xl text-4xl mb-6 text-center uppercase font-bold'>
        MEMBER REGISTRATION
      </h3>

      <Alert />

      <form className='w-full max-w-lg mx-auto pt-6'>
        <div className='mb-6 '>
          <div>
            <label
              className='block text-gray-500 font-bold mb-1'
              htmlFor='inline-full-name'
            >
              Username
            </label>
          </div>
          <div className='w-full'>
            <div>
              <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500'
                type='text'
                name='username'
                value={username}
                onChange={onChange}
                required
              />
            </div>
            <span className='text-gray-500 text-xs'>
              This will be your name displayed on projects
            </span>
          </div>
        </div>
        <div className='mb-6'>
          <div className='relative'>
            <label
              className='absolute inset-y-0 text-gray-500 font-bold p-2'
              htmlFor='inline-password'
            >
              <i className='fab fa-github'></i>
            </label>

            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 pl-8 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-teal-500'
              type='text'
              name='github'
              onChange={onChange}
              value={github}
              placeholder='Github profile link'
              required
            />
          </div>
        </div>
        <div className='mb-6'>
          <div className='relative'>
            <label
              className='absolute inset-y-0 text-gray-500 font-bold p-2'
              htmlFor='inline-password'
            >
              <i className='fab fa-linkedin-in'></i>
            </label>

            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 pl-8 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-teal-500'
              type='text'
              name='linkedin'
              onChange={onChange}
              value={linkedin}
              placeholder='Linkedin profile link'
              required
            />
          </div>
        </div>
        <div className=' mb-6'>
          <div className='relative'>
            <label
              className='absolute inset-y-0 text-gray-500 font-bold p-2 mr-6'
              htmlFor='inline-password'
            >
              <i className='fas fa-envelope'></i>
            </label>

            <input
              className='bg-gray-200 appearance-none border-2 pl-8 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-teal-500'
              type='email'
              name='email'
              placeholder='Email ID'
              onChange={onChange}
              value={email}
              required
            />
          </div>
        </div>
        <div className='mb-6'>
          <div>
            <label
              className='block text-gray-500 font-bold mb-1'
              htmlFor='password'
            >
              Password
            </label>
          </div>
          <div className='w-full'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500'
              type='password'
              name='password'
              onChange={onChange}
              value={password}
              required
            />
          </div>
        </div>
        <div className='mb-6'>
          <div>
            <label
              className='block text-gray-500 font-bold mb-1'
              htmlFor='password2'
            >
              Confirm Password
            </label>
          </div>
          <div className='w-full'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500'
              type='password'
              name='password2'
              id='passord2'
              onChange={onChange}
              value={password2}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              className='shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='button'
              onClick={onSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
