import React from 'react';
import { TbCircleLetterEFilled } from 'react-icons/tb';

const Logo = () => {
  return (
    <h1 className=" flex items-center text-black dark:text-white text-4xl font-semibold ">
      DRIV
      <span className="font-bold text-primary-color text-5xl">
        <TbCircleLetterEFilled />
      </span>
    </h1>
  );
};

export default Logo;
