import React from 'react';
import DashboardSectionContainer from '../../../../../compoments/container/DashboardSectionContainer';
import { useGetMeQuery } from '../../../../../redux/features/auth/auth.api';

const MyProfile = () => {
  const { data } = useGetMeQuery(undefined);
  const user = data?.data;
  return (
    <DashboardSectionContainer>
      <div>
        <h3 className="text-2xl font-bold dark:text-slate-50">My Profile</h3>
        <div className="mt-5 space-y-3">
          <div className="flex justify-center items-center">
            <img
              className="size-28 md:size-32 rounded-full border dark:border-none"
              src={
                user?.profilePhoto ||
                'https://media.lordicon.com/icons/wired/flat/21-avatar.gif'
              }
              alt=""
            />
          </div>

          <div>
            <h6 className="text-[1.1rem] font-medium text-primary-color">
              {' '}
              <span className="text-xl font-medium text-black dark:text-slate-100">
                Name:{' '}
              </span>
              {user?.name}
            </h6>
          </div>
          <div>
            <h6 className="text-[1.1rem] font-medium text-primary-color">
              {' '}
              <span className="text-xl font-medium text-black dark:text-slate-100">
                Email:{' '}
              </span>
              {user?.email}
            </h6>
          </div>
          <div>
            <h6 className="text-[1.1rem] font-medium text-primary-color">
              {' '}
              <span className="text-xl font-medium text-black dark:text-slate-100">
                Phone:{' '}
              </span>
              {user?.phone || 'N/A'}
            </h6>
          </div>
          <div>
            <h6 className="text-[1.1rem] font-medium text-primary-color">
              {' '}
              <span className="text-xl font-medium text-black dark:text-slate-100">
                Address:{' '}
              </span>
              {user?.address || 'N/A'}
            </h6>
          </div>
          <div>
            <h6 className="text-[1.1rem] font-medium text-primary-color">
              {' '}
              <span className="text-xl font-medium text-black dark:text-slate-100">
                Joined:{' '}
              </span>
              {user?.createdAt ? new Date(user.createdAt).toDateString() : ''}
            </h6>
          </div>
        </div>
      </div>
    </DashboardSectionContainer>
  );
};

export default MyProfile;
