import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
type TPrivateRouteProps = {
  children: React.ReactNode;
};
const AuthRouteProtector = ({ children }: TPrivateRouteProps) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const token = useAppSelector((state) => state.auth.token);
  const isLogging = useAppSelector((state) => state.toggle.isLogging);

  if (token && !isLogging) {
    return <Navigate to={'/'} replace />;
  }
  return children;
};

export default AuthRouteProtector;
