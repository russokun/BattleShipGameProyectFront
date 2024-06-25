import React, { useState } from 'react';
import Board from './components/Board';
import Ship from './components/Ship';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const [ships, setShips] = useState([
    { type: 'destroyer', x: 0, y: 0, horizontal: true },
    { type: 'submarine', x: 0, y: 0, horizontal: true },
    { type: 'cruiser', x: 0, y: 0, horizontal: true },
    { type: 'battleship', x: 0, y: 0, horizontal: true },
  ]);

  const handleToggleOrientation = (shipType) => {
    const updatedShips = ships.map(ship => {
      if (ship.type === shipType) {
        return { ...ship, horizontal: !ship.horizontal };
      }
      return ship;
    });

    setShips(updatedShips);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex flex-col justify-center items-center gap-4 w-screen h-screen bg-cover bg-top bg-[url("/background.jpeg")]'>
      <div>
          <Board/>
      </div>
      <div className='flex flex-wrap gap-2 min-h-[200px]'>
          {ships.map(ship => (
            <Ship
              key={ship.type}
              type={ship.type}
              x={ship.x}
              y={ship.y}
              horizontal={ship.horizontal}
              onClick={handleToggleOrientation}
            />
          ))}
      </div>
      </div>
    </DndProvider>
  );
};

export default App;
