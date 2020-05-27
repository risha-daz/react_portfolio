import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OverallContext from "../../context/overallContext";

const NavItem = ({ myname }) => {
  const overallContext = useContext(OverallContext);
  const clicked = () => {
    overallContext.goto(myname);
  };
  console.log(overallContext.title);
  return (
    <Link to={myname.url}>
      <div
        className={
          overallContext.title.name === myname.name ? activeStyle : restStyle
        }
        onClick={clicked}
      >
        {myname.name === "Portfolio" ? "Home" : myname.name}
      </div>
    </Link>
  );
};

const activeStyle =
  "bg-white p-6 hover:text-blue-600 uppercase text-yellow-900 text-lg font-bold";
const restStyle = "nav-item hover:text-blue-600 ";
export default NavItem;
