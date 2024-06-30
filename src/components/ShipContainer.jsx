import React from 'react';
import Ship from './Ship';

const ShipContainer = () => {
    const ships = [
        { type: 'battleship', size: 4, horizontal: true, id: 1 },
        { type: 'submarine', size: 3, horizontal: true, id: 2 },
        { type: 'submarine', size: 3, horizontal: true, id: 3 },
        { type: 'cruiser', size: 2, horizontal: true, id: 4 },
        { type: 'cruiser', size: 2, horizontal: true, id: 5 },
        { type: 'cruiser', size: 2, horizontal: true, id: 6 },
        { type: 'destroyer', size: 1, horizontal: true, id: 7 },
        { type: 'destroyer', size: 1, horizontal: true, id: 8 },
        { type: 'destroyer', size: 1, horizontal: true, id: 9 },
        { type: 'destroyer', size: 1, horizontal: true, id: 10 }
    ];

    return (
        <div className="flex relative flex-col items-start p-4 space-y-4 rounded-md backdrop-blur border-[0.1px] border-white">
            {ships.map((ship, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <Ship id={ship.id} type={ship.type} size={ship.size} horizontal={ship.horizontal}/>
                    <div className="text-lg font-bold">{ship.type}</div>
                </div>
            ))}
        </div>
    );
};

export default ShipContainer;
