import React from 'react';
import Menu from '../components/Menu'; // Asegúrate de importar tu componente Header desde su ubicación correcta
import Footer from '../components/Footer'; // Asegúrate de importar tu componente Footer desde su ubicación correcta

export const MainLayout = ({ children }) => {
  return (
    <div className=" w-full background-image content-center flex flex-col">
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
