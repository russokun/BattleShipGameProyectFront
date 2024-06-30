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
        switch (type) {
            case 'submarine':
                sizeClass = "w-[149px] h-[50px]";
                break;
            case 'cruiser':
                sizeClass = "w-[99px] h-[50px]";
                break;
            case 'battleship':
                sizeClass = "w-[199px] h-[50px]";
                break;
            default:
                sizeClass = "w-[50px] h-[50px]";
                break;
    }

    return (
        <div
            id={id}
            ref={drag}
            className={sizeClass + ' z-10 rounded-md opacity-100 cursor-pointer' + (isDragging ? ' border-4 border-blue-500' : '')}
        >
        <ShipImage ship={type} size={sizeClass} horizontal={horizontal}/>
        </div>
    );
};

export default Ship;
