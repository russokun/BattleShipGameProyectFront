import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import ShipImage from './ShipImage';

const Ship = ({ type, cords, horizontal, size, id, isReady }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ship',
        item: { type, horizontal, size, id, cords },  // Propiedades que tiene el objeto item que sale del componente Tile
        canDrag: () => !isReady, // Solo se permite arrastrar si isReady es false
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));


    let sizeClass;
    if (horizontal) {
        switch (type) {
            case 'battleship':
                sizeClass = "md:w-[199px] md:h-[50px] w-[90px] h-[30px]";
                break;
            case 'submarine':
                sizeClass = "md:w-[149px] md:h-[50px] w-[120px] h-[30px]";
                break;
            case 'cruiser':
                sizeClass = "md:w-[99px] md:h-[50px] w-[60px] h-[30px]";
                break;
            default:
                sizeClass = "md:w-[50px] md:h-[50px] w-[30px] h-[30px]";
                break;
        }
    } else {
        switch (type) {
            case 'battleship':
                sizeClass = "md:w-[50px] md:h-[199px] w-[30px] h-[90px]";
                break;
            case 'submarine':
                sizeClass = "md:w-[50px] md:h-[149px] w-[30px] h-[120px]";
                break;
            case 'cruiser':
                sizeClass = "md:w-[50px] md:h-[99px] w-[30px] h-[60px]";
                break;
            default:
                sizeClass = "md:w-[50px] md:h-[50px] w-[30px] h-[30px]";
                break;
        }
    }

    return (
        <div
            id={id}
            ref={drag}
            className={sizeClass + ' z-10 rounded-md opacity-100 cursor-pointer' + (isDragging ? ' border-4 border-blue-500' : '')}
        >
            <ShipImage ship={type} size={sizeClass} horizontal={horizontal} />
        </div>
    );
};

export default Ship;
