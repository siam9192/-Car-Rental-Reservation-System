import React from 'react';

import { Link } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa6';
import Container from '../container/Container';
import Logo from './Logo';

const Footer = () => {
  const navigations = [
    { display: "About Us", path: "/about-us" },
    { display: "FAQs", path: "/faqs" },
    { display: "Contact", path: "/contact" },
    { display: "Blog", path: "/blog" },
  ];
  
  const highlights = [
    { display: "Cars", path: "/home" },
    { display: "My Houses", path: "/cars" },
    { display: "Condos", path: "/dashboard" },
  ];
  
    return (
        <div className='  py-32 bg- dark:bg-transparent'>
            <Container>
             <div className='flex justify-between lg:flex-row flex-col lg:gap-0 gap-5'>

            <div className='space-y-3 dark:text-slate-100'>
               <Logo/>
              <div className='pt-3 space-y-2'>
              <p>Collins Street West, Victoria 8007, Australia.</p>
                <p>
+1 246-345-0695
</p>
<p>info@example.com</p>
              </div>
            </div>
            <div>
                <h3 className='text-xl text-black dark:text-white font-semibold'>Navigations</h3>
                <ul className='pt-3 space-y-2 flex flex-col'>
                {
                    navigations.map((nav,index)=>{
                        return <Link to={nav.path} key={index} className='dark:text-slate-200 te'>{nav.display}</Link>
                    })
                }
                </ul>
            </div>
           
            <div>
                <h3 className='text-xl  dark:text-white font-semibold'>The Highlights</h3>
                <ul className='pt-3 space-y-2 flex flex-col'>
                {
                    highlights.map((nav,index)=>{
                        return <Link to={nav.path} key={index} className='dark:text-slate-200'>{nav.display}</Link>
                    })
                }
                </ul>
            </div>
         
            <div>
                <h3 className='text-xl  font-semibold dark:text-white'>Get App</h3>
                <ul className='pt-3 space-y-4 flex flex-col'>
                <div className='flex items-center gap-1 border p-3 rounded-md lg:1/2'>
                        <div className='text-4xl  dark:text-slate-100'>
                       <FaGooglePlay></FaGooglePlay>
                        </div>
                        <div className='dark:text-slate-100'>
                            <h1 className='text-2xl font-semibold'>Google Play</h1>
                            <p>Get it Now</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 border rounded-md p-3 '>
                        <div className='text-4xl  dark:text-slate-100'>
                        <FaApple></FaApple>
                        </div>
                        <div className='dark:text-slate-100'>
                            <h1 className='text-2xl font-semibold'>Play Store</h1>
                            <p>Get it Now</p>
                        </div>
                    </div>
                </ul>
            </div>
             </div>
            </Container>
        </div>
    );
}

export default Footer;