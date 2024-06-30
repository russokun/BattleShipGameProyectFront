import React, { useState } from 'react';
import Board from '../components/Board';
import ShipContainer from '../components/ShipContainer';
import ShootBoard from '../components/ShootBoard';

const Game = () => {
  const [showShipContainer, setShowShipContainer] = useState(true);

  return (
    <div className="flex items-center w-full min-h-screen bg-cover bg-[url('/background.jpeg')] p-6">
      <div className='flex flex-wrap gap-5'>
      <ShipContainer show={showShipContainer} />
        <Board setShowShipContainer={setShowShipContainer} />
        <ShootBoard/>
      </div>
    </div>
  );
};

export default Game;
