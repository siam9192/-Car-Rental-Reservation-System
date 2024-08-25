import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../Sidebar/DashboardSidebar';
import { modes } from '../../utils/constant';

const DashboardLayout = () => {
  useEffect(() => {
    let mode = localStorage.getItem('mode');
    if (!mode) {
      localStorage.setItem('mode', 'light');
    }
    mode = localStorage.getItem('mode');
    if (!modes.includes(mode!)) {
      localStorage.setItem('mode', 'light');
    }

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return (
    <div className="grid grid-cols-12 max-h-[100vh] overflow-hidden">
      <div className="col-span-2 hidden lg:block">
        <DashboardSidebar />
      </div>
      <div className=" col-span-12 lg:col-span-10  max-h-[100vh] bg-gray-primary dark:bg-dark-light-primary p-5 md:p-10 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
