// src/layouts/MainLayout.js

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import DropDown from '../components/DropDown';
import DropDownMobile from '../components/DropDownMobile';

const MainLayout = ({ children }) => {
  const isLoggedIn = useSelector(state => state.AuthReducer.loggedIn);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log('isLoggedIn:', isLoggedIn);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? <DropDownMobile /> : <DropDown />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
