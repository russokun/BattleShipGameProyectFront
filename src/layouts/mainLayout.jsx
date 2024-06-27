import React from 'react';
import Header, { Menu } from '../components/Menu';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
