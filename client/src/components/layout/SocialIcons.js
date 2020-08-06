import React, { Fragment } from "react";

const SocialIcons = ({ stl }) => {
  const classes = `my-6 text-gray-${stl} w-10 text-lg hover:text-blue-600`;

  return (
    <Fragment>
      <button className={classes}>
        <i className='fab fa-twitter'></i>{" "}
      </button>
      <button className={classes}>
        <i className='fab fa-linkedin-in'></i>
      </button>
      <button className={`mr-8 ${classes}`}>
        <i className='fab fa-github'></i>
      </button>
    </Fragment>
  );
};

export default SocialIcons;
