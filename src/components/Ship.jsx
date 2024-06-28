import React, { useState } from 'react';

const Ship = ({ type, x, y, horizontal }) => {

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
            className={sizeClass + ' bg-gray-500 rounded-md opacity-70 cursor-pointer'}
        ></div>
    );
};

export default Ship;
