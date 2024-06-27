import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#071952] text-[#ebf4f6] py-4">
            <div className="container mx-auto text-center flex flex-col items-center lg:flex-row lg:justify-between lg:items-center gap-2">
                <p className="text-xl">&copy;Cohort 54 Grupo 2.</p>
                <p className='text-xl'>Todos los derechos reservados.</p>
                <div className='flex gap-5 lg:gap-10 pt-2'>
                    <a href='https://github.com/JoaquinNeulist/BattleShipGameProyectBack.git'>
                        <img src='./java.svg' alt="logo" className="w-10 h-10 bg-[#ebf4f6] rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110" />
                    </a>
                    <a href='https://github.com/russokun/BattleShipGameProyectFront.git'>
                        <img src='./react.svg' alt="logo" className="w-10 h-10 bg-[#ebf4f6] rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
