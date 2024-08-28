import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/auth/auth.slice';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLOgout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div
      onClick={handelLOgout}
      className="flex  items-center gap-2 p-3  rounded-lg text-black dark:text-slate-50 hover:cursor-pointer"
    >
      <span className="text-2xl ">
        {' '}
        <BiLogOutCircle />
      </span>{' '}
      <h6 className="text-xl font-medium">Logout</h6>
    </div>
  );
};

export default LogoutButton;
