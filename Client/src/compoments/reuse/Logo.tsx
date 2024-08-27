import React from 'react';
import { TbCircleLetterEFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
   <Link to={'/'}>
    <h1 className=" flex items-center text-black dark:text-white text-4xl font-semibold ">
      DRIV
      <span className="font-bold text-primary-color text-5xl">
        <TbCircleLetterEFilled />
      </span>
    </h1>
   </Link>
  );
};

export default Logo;
