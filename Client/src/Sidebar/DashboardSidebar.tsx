import React, { useState } from 'react';
import { sidebarItemsGenerator } from '../utils/fun';
import { adminPaths } from '../routes/admin.routes';
import Logo from '../compoments/reuse/Logo';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import ToggleMode from '../compoments/reuse/ToggleMode';

const DashboardSidebar = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(0);
  let sidebarItems;
  sidebarItems = sidebarItemsGenerator(adminPaths);

  const handelSetActive = (value: number) => {
    setActive(value);
  };

  return (
    <section className="h-[100vh] w-full bg-white dark:bg-dark-light-secondary p-5 shadow">
      <Logo />
      <ToggleMode />
      <div className=" flex flex-col justify-between h-full ">
        <div className="mt-10 space-y-5">
          {sidebarItems.map((item, index) => {
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
            <div className="flex items-center gap-2 p-3  rounded-lg">
              <span className="text-2xl text-black dark:text-slate-50">
                {' '}
                <BiLogOutCircle />
              </span>{' '}
              <h6 className="text-xl font-medium">Logout</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSidebar;
