import React from "react";
import def from "../../../default.png";
const UserItem = ({ member }) => {
  const { username } = member;
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg'>
      <img className='w-full' src={def} alt={username} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{username}</div>
        <p className='text-gray-700 text-base'>Member</p>
      </div>
      <div className='px-6 py-4'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          <i className='fas fa-envelope'></i>
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          <i className='fab fa-linkedin-in'></i>
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
          <i className='fab fa-github'></i>
        </span>
      </div>
    </div>
  );
};

export default UserItem;
