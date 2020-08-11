import React, { useContext } from "react";
import AppContext from "../context/app/appContext";
const Alert = () => {
  const appContext = useContext(AppContext);
  const { errormsg, removeErrors } = appContext;

  const dismissAlert = () => {
    removeErrors();
  };
  return (
    errormsg && (
      <div
        className={`bg-${errormsg.color}-100 border border-${errormsg.color}-400 text-${errormsg.color}-700 px-4 py-3 rounded relative`}
        role='alert'
      >
        <strong className='font-bold'>{errormsg.type}!</strong>
        <span className='block sm:inline'>{errormsg.msg}</span>
        <span
          className='absolute top-0 bottom-0 right-0 px-4 py-3'
          onClick={dismissAlert}
        >
          <i className='fas fa-times'></i>
        </span>
      </div>
    )
  );
};

export default Alert;
