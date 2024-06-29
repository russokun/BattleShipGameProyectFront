import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const Ship = ({ type, x, y, horizontal, size }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ship',
        item: { type, horizontal, size },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    let sizeClass;
    if (horizontal) {
        switch (type) {
            case 'submarine':
                sizeClass = "w-[150px] h-[50px]";
                break;
            case 'cruiser':
                sizeClass = "w-[100px] h-[50px]";
                break;
            case 'battleship':
                sizeClass = "w-[200px] h-[50px]";
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
            ref={drag}
            className={sizeClass + ' bg-gray-500 rounded-md opacity-100 cursor-pointer' + (isDragging ? ' border-4 border-blue-500' : '')}
        ></div>
    );
};

export default Ship;
