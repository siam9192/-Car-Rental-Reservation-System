import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../Sidebar/DashboardSidebar';
import { modes } from '../../utils/constant';
import DashboardHeader from '../reuse/DashboardHeader';

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
      <section className=" col-span-12 lg:col-span-10 h-[100vh] bg-gray-primary dark:bg-dark-light-primary p-2 lg:px-10 pt-20 lg:pt-32 pb-10 overflow-y-auto relative">
        <DashboardHeader/>
        <Outlet />
      </section>
      
    </div>
  );
};

export default DashboardLayout;
