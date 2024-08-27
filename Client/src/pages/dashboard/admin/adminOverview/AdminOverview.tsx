import React from 'react';
import DashboardSectionContainer from '../../../../compoments/container/DashboardSectionContainer';
import { overviewData } from '../../../../utils/data';
import OverviewCard from './components/OverviewCard';
import RecentBooking from './sections/RecentBooking';
import RecentReview from './sections/RecentReview';

const AdminOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-slate-50">Overview</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {overviewData.map((data, i) => {
          return <OverviewCard data={data} />;
        })}
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <RecentBooking />
        <RecentReview />
      </div>
    </div>
  );
};

export default AdminOverview;
