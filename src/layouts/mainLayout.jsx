import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import DropDown from '../components/DropDown';
import DropDownMobile from '../components/DropDownMobile';

const MainLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // ajusta el tamaño según tus necesidades
    };

    // Llama a handleResize al cargar y al redimensionar la ventana
    handleResize();
    window.addEventListener('resize', handleResize);

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen Roboto">
      {isMobile ? <DropDownMobile /> : <DropDown />}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
