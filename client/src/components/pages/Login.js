import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../context/app/appContext";
import Alert from "../Alert";
import { Link } from "react-router-dom";
const Login = (props) => {
  const appContext = useContext(AppContext);
  const { errormsg, currentUser, loginMember, goto } = appContext;
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
  });

  const { username, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginMember({ username, password });
  };

  const gotoRegister = () => {
    appContext.goto({ name: "Register", url: "/register" });
  };
  const dismissAlert = (e) => {
    //removeErrors();
  };
  return (
    <div className='bg-white container mx-auto p-6 md:p-32 w-11/12 shadow'>
      <h3 className='sm:text-6xl text-5xl mb-6 text-center uppercase font-bold'>
        MEMBER LOGIN
      </h3>
      {errormsg && (
        <Alert
          dismissAlert={dismissAlert()}
          msg={errormsg}
          type='Error'
          color='red'
        />
      )}
      <form className='w-full max-w-sm mx-auto pt-6'>
        <div className='md:flex md:items-center mb-6 '>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-full-name'
            >
              Username
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500'
              type='text'
              name='username'
              value={username}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-password'
            >
              Password
            </label>
          </div>
          <div className='md:w-2/3'>
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
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              className='shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='button'
              onClick={onSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div className='text-xs text-gray-500 text-center mt-10'>
        <Link
          to='/register'
          className='underline text-gray-600 hover:text-gray-400'
          onClick={gotoRegister}
        >
          Register here
        </Link>{" "}
        if you're a new member.
      </div>
    </div>
  );
};

export default Login;
