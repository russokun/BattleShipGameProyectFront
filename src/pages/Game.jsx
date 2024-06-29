import React from 'react';
import Board from '../components/Board';
import ShipContainer from '../components/ShipContainer';

const Game = () => {
  return (
    <div className="flex items-center w-full h-full bg-cover bg-[url('/background.jpeg')] p-6">
      <ShipContainer />
      <Board />
    </div>
  );
};

export default Game;
