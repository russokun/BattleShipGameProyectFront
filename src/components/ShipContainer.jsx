import React from 'react';
import Ship from './Ship';

const ShipContainer = () => {
  const ships = [
    { type: 'battleship', count: 1 },
    { type: 'submarine', count: 2 },
    { type: 'cruiser', count: 3 },
    { type: 'destroyer', count: 4 }
  ];

  return (
    <div className="flex flex-col items-start p-4 space-y-4 bg-white rounded-md">
      {ships.map((ship, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Ship type={ship.type} horizontal={true} />
          <div className="text-lg font-bold">{`${ship.type} x${ship.count}`}</div>
        </div>
      ))}
    </div>
  );
};

export default ShipContainer;
