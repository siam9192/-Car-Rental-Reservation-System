import React, { Children, ReactNode, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useGetMeQuery } from '../redux/features/auth/auth.api';
import LoadingPage from '../compoments/loading/LoadingPage';
type TPrivateRouteProps = {
  roles: any;
  children: ReactNode;
};
const PrivateRoute = ({ roles, children }: TPrivateRouteProps) => {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetMeQuery(undefined);
  const navigate = useNavigate();
  const { state } = useLocation();
  const user = data?.data;

  if (isLoading) {
    return <LoadingPage />;
  }



  if (!user || !roles.includes(user?.role!)) {
    if (state) {
      navigate(state);
    } else {
      navigate('/');
    }
  }
  // if(!roles.includes(user?.role!)){

  // }
  return children;
};

export default PrivateRoute;
