import React from 'react';
import DashboardSectionContainer from '../../../../compoments/container/DashboardSectionContainer';
import MyProfile from './sections/MyProfile';
import EditProfile from './sections/EditProfile';

const UserOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-slate-50">Overview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <MyProfile />
        <EditProfile />
      </div>
    </div>
  );
};

export default UserOverview;
