import React from 'react';
import Container from '../container/Container';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { TbCircleLetterEFilled } from 'react-icons/tb';
import ToggleMode from './ToggleMode';
import Logo from './Logo';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { toggleSidebar } from '../../redux/features/toogle/toggle.slice';
import { navRoutes } from '../../utils/constant';

const Header = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const token = useAppSelector(state=>state.auth.token)
  const openSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <header className="py-5 md:py-8">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Nav */}
          <nav className="space-x-2 hidden md:block">
            {navRoutes.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  className={`${pathname === item.path ? 'text-primary-color' : 'text-gray-800 dark:text-slate-200'} text-[1.2rem] hover:text-primary-color font-medium  `}
                >
                  {item.display}
                </Link>
              );
            })}
          </nav>

          {/* Menu button */}

          <div className="flex items-center gap-3">
         

       {
        token ?
        <div className="pl-4 md:flex items-center gap-2 rounded-full border bg-blue-100 hidden md:block">
        <h2 className="font-bold uppercase">SIAM</h2>
        <img
          className="size-10 rounded-full"
          src="https://res.cloudinary.com/ddlfpv4gl/image/upload/v1724086523/images/ahlrweixpa9dil5lw3g3.png"
          alt=""
        />
      </div>
        :
        <>
        <Link to={'/auth/login'}>
          <button className=" bg-black dark:bg-white text-white dark:text-black  text-wrap px-4 py-2 rounded-full  hidden md:block">
            Login
          </button>
        </Link>
        <Link to={'/auth/sign-up'}>
          <button className=" bg-primary-color text-wrap px-4 py-2 rounded-full text-white hidden md:block">
            SignUp
          </button>
        </Link>
        </>
       }
            <ToggleMode />
            <button
              onClick={openSidebar}
              className=" p-2 rounded-full bg-gray-100 text-2xl text-black hover:text-primary-color md:hidden "
            >
              <RiMenu3Fill />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
