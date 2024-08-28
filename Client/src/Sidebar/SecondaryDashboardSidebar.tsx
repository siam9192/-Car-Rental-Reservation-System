import React, { useEffect, useState } from 'react';
import {
  toggleDashboardSidebar,
  toggleSidebar,
} from '../redux/features/toogle/toggle.slice';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Link, useLocation } from 'react-router-dom';
import { sidebarItemsGenerator } from '../utils/fun';
import { adminPaths } from '../routes/admin.routes';
import { MdCancel } from 'react-icons/md';
import { logout } from '../redux/features/auth/auth.slice';
import LogoutButton from '../compoments/button/LogoutButton';
import { userPaths } from '../routes/user.routes';
const SecondaryDashboardSidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(
    (state) => state.toggle.isDashboardSidebarOpen
  );

  useEffect(() => {
    if (isSidebarOpen) {
      window.document.body.style.overflow = 'hidden';
    }
    return () => {
      window.document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  const closeSidebar = () => {
    dispatch(toggleSidebar());
  };

  const [active, setActive] = useState(0);
  const user = useAppSelector((state) => state.auth.user);
  let sidebarItems: any;
  switch (user?.role) {
    case 'admin':
      sidebarItems = sidebarItemsGenerator(adminPaths);
      break;
    case 'user':
      sidebarItems = sidebarItemsGenerator(userPaths);
  }

  const handelSetActive = (value: number) => {
    setActive(value);
  };

  return (
    <div
      onClick={closeSidebar}
      className={`w-full h-full fixed ${isSidebarOpen ? 'left-0' : '-left-[200%]'} transition-all duration-300 top-0  shadow bg-white dark:bg-gray-900   md:hidden p-5`}
    >
      <div className=" flex flex-col justify-between h-full ">
        <div className="mt-10 space-y-5">
          {sidebarItems.map((item: any, index: any) => {
            return (
              <Link
                onClick={() => {
                  handelSetActive(index);
                  dispatch(toggleDashboardSidebar());
                }}
                to={item.path}
                className="block"
              >
                <div
                  key={index}
                  className={`flex items-center gap-2 p-3 ${active === index ? 'bg-gray-primary dark:bg-dark-light-primary' : ''} rounded-lg`}
                >
                  <span className="text-2xl text-black dark:text-slate-100 ">
                    {' '}
                    <item.icon />
                  </span>{' '}
                  <h6 className="text-xl font-medium text-black dark:text-slate-100">
                    {item.title}
                  </h6>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <div className="mb-20 space-y-5">
            <LogoutButton />
          </div>
        </div>
      </div>
      <button
        onClick={() => dispatch(toggleDashboardSidebar())}
        className=" absolute top-2 right-2 text-black dark:text-white text-4xl"
      >
        <MdCancel />
      </button>
    </div>
  );
};

export default SecondaryDashboardSidebar;
