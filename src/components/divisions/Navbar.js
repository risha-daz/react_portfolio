import React, { useState } from "react";
import bg from "../bg.jpg";
import NavItem from "./NavItem";
import SocialIcons from "./SocialIcons";
const Navbar = () => {
  const [navitems] = useState([
    { name: "Portfolio", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Library", url: "/library" },
    { name: "About Us", url: "/aboutus" },
  ]);
  return (
    <div
      className='relative container mx-auto pt-36 w-11/12'
      style={{ background: `url(${bg})` }}
    >
      <nav className='flex flex-col lg:justify-between lg:flex-row' id='start'>
        <div className='nav2 flex-col lg:flex-row hidden lg:flex'>
          {navitems.map((item) => (
            <NavItem key={item.url} myname={item} />
          ))}
        </div>
        <div className='social-icons hidden lg:flex'>
          <SocialIcons stl='200' />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
