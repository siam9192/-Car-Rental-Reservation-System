import React from 'react';

type TDashboardSectionContainerProps = {
  title?: string;
  children: React.ReactNode;
};

const DashboardSectionContainer = ({
  title,
  children,
}: TDashboardSectionContainerProps) => {
  return (
    <div className="mt-10 bg-gray-50 dark:bg-dark-light-secondary shadow p-5 md:p-10">
      {title && (
        <h2 className="mb-5 text-2xl text-gray-950 dark:text-slate-100">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default DashboardSectionContainer;
