import React from 'react';
import Logo from './Logo';
import ToggleMode from './ToggleMode';
import { useGetMeQuery } from '../../redux/features/auth/auth.api';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { toggleDashboardSidebar } from '../../redux/features/toogle/toggle.slice';
import SecondaryDashboardSidebar from '../../Sidebar/SecondaryDashboardSidebar';

const DashboardHeader = () => {
  const { data } = useGetMeQuery(undefined);
  const user = data?.data;

  const dispatch = useDispatch();
  return (
    <header className="py-4 md:py-6 px-5 bg-white dark:bg-dark-light-secondary fixed left-0 top-0 z-50 w-full ">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-2">
          <Link
            to={'/dashboard'}
            className="pl-4 flex items-center gap-2 rounded-full border bg-blue-100 "
          >
            <h2 className="font-bold uppercase">SIAM</h2>
            <img
              className="size-10 rounded-full"
              src={
                user?.profilePhoto ||
                'https://media.lordicon.com/icons/wired/flat/21-avatar.gif'
              }
              alt=""
            />
          </Link>
          <ToggleMode />
          <button
            onClick={() => dispatch(toggleDashboardSidebar())}
            className="lg:hidden block text-black dark:text-white text-2xl w-fit"
          >
            <RiMenu3Fill />
          </button>
        </div>
      </div>
      <SecondaryDashboardSidebar />
    </header>
  );
};

export default DashboardHeader;
