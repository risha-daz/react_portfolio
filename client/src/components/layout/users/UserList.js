import React, { useContext } from "react";
import AppContext from "../../../context/app/appContext";
import UserItem from "./UserItem";
const UserList = () => {
  const appContext = useContext(AppContext);
  return (
    <div className='md:flex md:flex-wrap'>
      {appContext.users.map((member) => (
        <div key={member._id} className='px-2 w-1/3'>
          <UserItem member={member} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
