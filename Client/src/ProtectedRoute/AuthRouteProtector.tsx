import React from 'react';
import { Navigate} from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
type TPrivateRouteProps = {
  children: React.ReactNode;
};
const AuthRouteProtector = ({ children }: TPrivateRouteProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const role = user?.role
   
  if (user) {
   if(role === 'user'){
    return <Navigate to={`/dashboard`} replace />;
   }
   if(role === 'admin'){
    return <Navigate to={`/dashboard/admin`} replace />;
   }
  }
  return children;
};

export default AuthRouteProtector;
