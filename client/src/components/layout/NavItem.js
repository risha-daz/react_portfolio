import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/app/appContext";

const NavItem = ({ myname }) => {
  const appContext = useContext(AppContext);
  const clicked = () => {
    appContext.goto(myname);
  };

  return (
    <Link to={myname.url}>
      <div
        className={
          appContext.title.name === myname.name ? activeStyle : restStyle
        }
        onClick={clicked}
      >
        {myname.name === "Aeromodelling Club" ? "Home" : myname.name}
      </div>
    </Link>
  );
};

const activeStyle =
  "bg-white p-6 hover:text-blue-600 uppercase text-yellow-900 text-lg font-bold";
const restStyle = "nav-item hover:text-blue-600 ";
export default NavItem;
