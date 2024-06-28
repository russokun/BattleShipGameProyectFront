import React from 'react';
import Ship from './Ship';

const ShipContainer = () => {
    const ships = [
        { type: 'battleship', size: 4, horizontal: true },
        { type: 'submarine', size: 3, horizontal: true },
        { type: 'cruiser', size: 2, horizontal: true },
        { type: 'destroyer', size: 1, horizontal: true }
    ];

    return (
        <div className="flex flex-col items-start p-4 space-y-4 bg-white rounded-md">
            {ships.map((ship, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <Ship type={ship.type} size={ship.size} horizontal={ship.horizontal}/>
                    <div className="text-lg font-bold">{ship.type} x{ship.count}</div>
                </div>
            ))}
        </div>
    );
};

export default ShipContainer;
