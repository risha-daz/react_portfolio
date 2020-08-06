import React, { useState } from "react";
import NavItem from "./NavItem";
import SocialIcons from "./SocialIcons";
const Popmenu = () => {
  const [navitems] = useState([
    { name: "Portfolio", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Library", url: "/library" },
    { name: "About Us", url: "/aboutus" },
  ]);
  return (
    <div className='mob-nav z-40 top-0 right-0 w-3/4 md:w-1/2 hidden bg-white overflow-hidden h-screen fixed lg:hidden'>
      <div className='nav2 flex-col lg:flex-row hidden lg:flex'>
        {navitems.map((item) => (
          <NavItem key={item.url} myname={item} />
        ))}
      </div>
      <div className='social-icons hidden lg:flex'>
        <SocialIcons stl='200' />
      </div>
    </div>
  );
};

export default Popmenu;
