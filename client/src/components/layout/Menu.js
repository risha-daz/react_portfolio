import React, { useContext, Fragment } from "react";
import AppContext from "../../context/appContext";

const Menu = () => {
  const appContext = useContext(AppContext);
  const menuBtn = () => {
    appContext.hideMenu();
  };
  return (
    <Fragment>
      {" "}
      {appContext.menu === "hide" ? (
        <div className='x-button text-right text-lg p-6'>
          <button
            className='hover:text-blue-600'
            onClick={() => {
              appContext.showMenu();
            }}
          >
            <i className='fas fa-times'></i>
          </button>
        </div>
      ) : (
        <div className='absolute top-0 right-0 lg:hidden container text-gray-400 text-lg w-24 my-4 mx-2'>
          <button
            className='uppercase hover:text-blue-600 font-bold'
            onClick={() => {
              menuBtn();
            }}
          >
            Menu <i className='fas fa-bars'></i>
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Menu;
