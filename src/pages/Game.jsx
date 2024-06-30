import React from 'react';
import Board from '../components/Board';
import ShipContainer from '../components/ShipContainer';
import ShootBoard from '../components/ShootBoard';

const Game = () => {
  return (
    <div className="flex items-center w-full min-h-screen bg-cover bg-[url('/background.jpeg')] p-6">
      <div className='flex flex-wrap gap-5'>
      <ShipContainer />
        <Board />
        <ShootBoard/>
      </div>
      
    </div>
  );
};

export default Game;
