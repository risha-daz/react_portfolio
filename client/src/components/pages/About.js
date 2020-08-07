import React, { useContext, useEffect } from "react";
import UserList from "../layout/users/UserList";
import AppContext from "../../context/app/appContext";
const About = () => {
  const appContext = useContext(AppContext);
  useEffect(() => {
    appContext.getMembers();
  }, []);
  return (
    <div className='bg-white container mx-auto p-12 md:p-32 w-11/12 shadow-2xl'>
      <h3 className='sm:text-6xl text-5xl text-center uppercase font-bold'>
        About Us
      </h3>
      <h2 className='text-center italic sm:text-4xl text-4xl'>Subtitle 2</h2>
      <br></br>
      {appContext.users && <UserList />}
    </div>
  );
};

export default About;
