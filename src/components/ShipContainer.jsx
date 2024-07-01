import React from 'react';
import Ship from './Ship';

const ShipContainer = ({ show }) => {
    if (!show) return null;

    const ships = [
        { type: 'battleship', size: 4, horizontal: false, id: 1 },
        { type: 'submarine', size: 3, horizontal: false, id: 2 },
        { type: 'submarine', size: 3, horizontal: false, id: 3 },
        { type: 'cruiser', size: 2, horizontal: false, id: 4 },
        { type: 'cruiser', size: 2, horizontal: false, id: 5 },
        { type: 'cruiser', size: 2, horizontal: false, id: 6 },
        { type: 'destroyer', size: 1, horizontal: false, id: 7 },
        { type: 'destroyer', size: 1, horizontal: false, id: 8 },
        { type: 'destroyer', size: 1, horizontal: false, id: 9 },
        { type: 'destroyer', size: 1, horizontal: false, id: 10 }
    ];

    return (
        <div className="flex relative flex-wrap md:flex-row flex-col items-start p-4 rounded-md backdrop-blur border-[0.1px] border-white md:h-[450px] md:w-[210px] h-[160px] w-[90vw] md:mt-[70px] mb-8">
            {ships.map((ship, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <Ship id={ship.id} type={ship.type} size={ship.size} horizontal={ship.horizontal}/>
                    <div className="text-lg font-bold"></div>
                </div>
            ))}
        </div>
    );
};

export default ShipContainer;
