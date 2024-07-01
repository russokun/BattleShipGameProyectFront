import React, { useState } from 'react';
import Board from '../components/Board';
import ShipContainer from '../components/ShipContainer';
import ShootBoard from '../components/ShootBoard';

const Game = () => {
  const [showShipContainer, setShowShipContainer] = useState(true);

  return (
    <div className="flex items-center w-full min-h-screen bg-cover bg-[url('/background.jpeg')] p-6">
      <div className='flex flex-wrap md:gap-5 gap-20 flex-col md:flex-row'>
        <div className='flex flex-col md:flex-row flex-wrap'>
        <ShipContainer show={showShipContainer} />
        <Board setShowShipContainer={setShowShipContainer} />
        </div>
        <ShootBoard/>
      </div>
    </div>
  );
};

export default Game;
