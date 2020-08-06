import React, { useContext } from "react";
import AppContext from "../../context/appContext";

const Header = () => {
  const appContext = useContext(AppContext);
  return (
    <header className='text-center mb-24'>
      <h1 className='sm:text-7xl font-bold pt-56 uppercase text-white text-4xl'>
        {appContext.title.name}
      </h1>
      <h2 className='italic mb-10 sm:text-5xl text-3xl pb-8 text-white'>
        The aeromodelling club of IIT Indore
      </h2>
    </header>
  );
};

export default Header;
