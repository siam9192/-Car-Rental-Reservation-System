import React from 'react';
import Container from '../container/Container';
import Logo from './Logo';
import { IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="py-10 md:py-20">
      <Container>
        <div className="pb-10 border-b flex justify-between items-center">
          <Logo />
          <button className=" bg-primary-color hover:bg-secondary-color text-white px-4 py-3 rounded-full flex items-center gap-1">
            <span>Follow Us On Twitter</span>{' '}
            <span>
              <IoLogoTwitter />
            </span>
          </button>
        </div>
        <div></div>
      </Container>
    </footer>
  );
};

export default Footer;
