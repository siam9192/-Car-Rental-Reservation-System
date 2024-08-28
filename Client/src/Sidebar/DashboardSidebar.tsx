import React, { useState } from 'react';
import { sidebarItemsGenerator } from '../utils/fun';
import { adminPaths } from '../routes/admin.routes';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import LogoutButton from '../compoments/button/LogoutButton';
import { useAppSelector } from '../redux/hook';
import { userPaths } from '../routes/user.routes';

const DashboardSidebar = () => {
  const { pathname } = useLocation();
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
    <section className="h-[100vh] w-full bg-white dark:bg-dark-light-secondary pt-32 px-5 shadow">
      <div className=" flex flex-col justify-between h-full ">
        <div className="mt-10 space-y-5">
          {sidebarItems.map((item: any, index: number) => {
            return (
              <Link
                onClick={() => handelSetActive(index)}
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
    </section>
  );
};

export default DashboardSidebar;
