import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const Ship = ({ type, x, y, horizontal, onClick }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ship',
        item: { type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    let sizeClass;
    if (horizontal) {
        switch (type) {
            case 'submarine':
                sizeClass = "w-[100px] h-[50px]";
                break;
            case 'cruiser':
                sizeClass = "w-[150px] h-[50px]";
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
                sizeClass = "w-[50px] h-[100px]";
                break;
            case 'cruiser':
                sizeClass = "w-[50px] h-[150px]";
                break;
            case 'battleship':
                sizeClass = "w-[50px] h-[200px]";
                break;
            default:
                sizeClass = "w-[50px] h-[50px]";
                break;
        }
    }

    const handleClick = () => {
        onClick(type); // Llama al manejador de clic en App pasando el tipo del barco
    };

    return (
        <div
            ref={drag}
            className={sizeClass + ' bg-gray-500 rounded-md opacity-70 cursor-pointer'}
            style={{ opacity: isDragging ? 0.5 : 1 }}
            onClick={handleClick} // Manejador de clic para cambiar la orientación
        ></div>
    );
};

export default Ship;
