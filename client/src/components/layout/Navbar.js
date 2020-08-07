import React, { useState } from "react";
import bg from "../bg.jpg";
import NavItem from "./NavItem";
import SocialIcons from "./SocialIcons";
const Navbar = () => {
  const [navitems] = useState([
    { name: "Aeromodelling Club", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About Us", url: "/about" },
    { name: "Login", url: "/login" },
  ]);
  return (
    <div
      className={
        "flex flex-col lg:justify-between lg:flex-row relative container mx-auto pt-36 w-11/12"
      }
      style={{ background: `url(${bg})` }}
    >
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

export default Navbar;
