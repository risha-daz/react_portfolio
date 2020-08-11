import React, { useState, Fragment, useEffect } from "react";
import NavItem from "./NavItem";
import SocialIcons from "./SocialIcons";
const Popmenu = () => {
  const [navitems] = useState([
    { name: "Aeromodelling Club", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About Us", url: "/about" },
    { name: "Login", url: "/login" },
  ]);
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(false);
  }, []);

  const toggleMenu = () => {
    setState(!state);
  };
  return (
    <Fragment>
      {!state && (
        <div className='absolute top-0 right-0 lg:hidden ham container text-gray-400 text-lg w-24 my-4 mx-2'>
          <button
            className='uppercase hover:text-blue-600 font-bold'
            onClick={toggleMenu}
          >
            Menu <i className='fas fa-bars'></i>
          </button>
        </div>
      )}
      {state && (
        <div className='z-40 top-0 right-0 w-3/4 md:w-1/2 bg-white overflow-hidden h-screen fixed lg:hidden'>
          <div className='x-button text-right text-lg p-6'>
            <button className='hover:text-blue-600' onClick={toggleMenu}>
              <i className='fas fa-times'></i>
            </button>
          </div>

          <div className='mx-4'>
            {navitems.map((item) => (
              <NavItem
                key={item.url}
                myname={item}
                mobile={true}
                toggleMenu={toggleMenu}
              />
            ))}
          </div>
          <div className='social-icons lg:flex pl-6'>
            <SocialIcons stl='500' />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Popmenu;
