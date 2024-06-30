import React, { useState } from 'react';
import Board from '../components/Board';
import ShipContainer from '../components/ShipContainer';

const Game = () => {
  const [showShipContainer, setShowShipContainer] = useState(true);

  return (
    <div className="flex items-center w-full h-full bg-cover bg-[url('/background.jpeg')] p-6">
      <ShipContainer show={showShipContainer}/>
      <Board setShowShipContainer={setShowShipContainer}/>
    </div>
  );
};

export default Game;
