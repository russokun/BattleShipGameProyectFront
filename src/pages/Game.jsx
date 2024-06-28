import React from 'react';
import Board from '../components/Board';
import ShipContainer from '../components/ShipContainer';

const Game = () => {
  return (
    <div className="flex items-center w-screen h-screen bg-cover bg-[url('/background.jpeg')] space-x-4 p-6">
      <ShipContainer />
      <Board />
    </div>
  );
};

export default Game;
