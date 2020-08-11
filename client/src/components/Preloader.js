import React from "react";
import spinner from "../spinner.gif";
const Preloader = () => {
  return (
    <div className='text-center'>
      <img src={spinner} />
    </div>
  );
};

export default Preloader;
