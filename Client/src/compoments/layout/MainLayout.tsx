import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Container from '../container/Container';
import Header from '../reuse/Header';
import Footer from '../reuse/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { toggleSidebar } from '../../redux/features/toogle/toggle.slice';

const MainLayout = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const headerHiddenPaths = ['/auth/sign-up', '/auth/login'];
  const footerHiddenPaths = ['/auth/sign-up', '/auth/login'];
  const isSidebarOpen = useAppSelector((state) => state.toggle.isSidebarOpen);

  // close the sidebar when the path will be change
  useEffect(() => {
    if (isSidebarOpen) {
      dispatch(toggleSidebar());
    }
  }, [pathname]);

  return (
    <>
      {!headerHiddenPaths.includes(pathname) && <Header />}
      <Container
        disablePaths={['/car-listing', '/car', '/auth/sign-up', '/auth/login']}
      >
        <Outlet />
        <Sidebar />
      </Container>
      {!footerHiddenPaths.includes(pathname) && <Footer />}
    </>
  );
};

export default MainLayout;
