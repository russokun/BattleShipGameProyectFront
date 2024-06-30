import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import ShipImage from './ShipImage';

const Ship = ({ type, x, y, horizontal, size, id }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ship',
        item: { type, horizontal, size, id, x, y },  // Propiedades que tiene el objeto item que sale del componente Tile
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));


    let sizeClass;
    if (horizontal) {
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
    } else {
        switch (type) {
            case 'submarine':
                sizeClass = "w-[50px] h-[150px]";
                break;
            case 'cruiser':
                sizeClass = "w-[50px] h-[100px]";
                break;
            case 'battleship':
                sizeClass = "w-[50px] h-[200px]";
                break;
            default:
                sizeClass = "w-[50px] h-[50px]";
                break;
        }
    }

    return (
        <div
            id={id}
            ref={drag}
            className={sizeClass + ' z-10 rounded-md opacity-100 cursor-pointer' + (isDragging ? ' border-4 border-blue-500' : '')}
        >
        <ShipImage ship={type} size={sizeClass} />
        </div>
    );
};

export default Ship;
