import React, { useContext } from "react";
import OverallContext from "../../context/overallContext";

const Header = () => {
  const overallContext = useContext(OverallContext);
  return (
    <header className='text-center'>
      <h1 className='sm:text-7xl font-bold pt-56 uppercase text-white text-5xl'>
        {overallContext.title.name}
      </h1>
      <h2 className='italic mb-10 sm:text-5xl text-3xl pb-8 text-white'>
        Subtitle
      </h2>
    </header>
  );
};

export default Header;
