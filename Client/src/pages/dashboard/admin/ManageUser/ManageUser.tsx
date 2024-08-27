import React from 'react';
import {
  useChangeRoleMutation,
  useGetUsersQuery,
} from '../../../../redux/features/admin/userManagement.api';

const ManageUser = () => {
  const { data, isLoading } = useGetUsersQuery(undefined);
  const users = data?.data;

  const [changeRole] = useChangeRoleMutation();
  const handelChangeRole = async (id: string, role: string) => {
    changeRole({ id, payload: { role } });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-slate-50">Manage User</h1>
      <div className="mt-10 bg-gray-50 dark:bg-dark-light-secondary shadow p-5 md:p-10">
        <h2 className="text-2xl font-bold dark:text-slate-100 text-end">
          <span className="text-primary-color">{users?.length}</span> Users
          Found
        </h2>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {users?.map((user, index) => (
            <div className="p-5 py-10 md:p-10 bg-white dark:bg-dark-light-primary shadow relative">
              <div className="flex items-center gap-4">
                <img
                  className=" size-14 md:size-20 rounded-full"
                  src="https://media.lordicon.com/icons/wired/flat/21-avatar.gif"
                  alt=""
                />
                <div className="space-y-1">
                  <h3 className=" text-xl md:text-2xl font-medium dark:text-slate-50">
                    {user.name}{' '}
                  </h3>
                  <h3 className=" text-[0.9rem] md:text-xl font-medium dark:text-slate-50">
                    {user.email}
                  </h3>
                </div>
              </div>
              <div className="text-end space-x-2 mt-2">
                {user.role === 'admin' ? (
                  <button
                    onClick={() => handelChangeRole(user._id, 'user')}
                    className="px-4 py-2 bg-secondary-color text-white"
                  >
                    Make Admin
                  </button>
                ) : (
                  <button
                    onClick={() => handelChangeRole(user._id, 'admin')}
                    className="px-4 py-2 bg-secondary-color text-white"
                  >
                    Make User
                  </button>
                )}
                <button className="px-4 py-2 bg-pink-600 text-white">
                  Block User
                </button>
              </div>
              <span
                className={`absolute top-2 md:top-4  right-2 text-[0.9rem] text-white px-4 py-2 ${user.role === 'user' ? 'bg-green-500' : 'bg-primary-color'} rounded-full`}
              >
                {user.role.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
