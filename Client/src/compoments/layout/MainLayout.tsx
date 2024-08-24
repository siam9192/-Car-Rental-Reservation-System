import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../container/Container';
import Header from '../reuse/Header';
import Footer from '../reuse/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container disablePaths={['/car-listing']}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
