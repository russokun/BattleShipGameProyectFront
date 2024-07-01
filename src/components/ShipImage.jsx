import React from 'react'

const ShipImage = ({ ship, size, horizontal }) => {


    let shipImage;
    if (horizontal) {
        switch (ship) {
            case 'battleship':
                shipImage = '/battleship.png';
                break;
            case 'submarine':
                shipImage = '/submarine.png';
                break;
            case 'cruiser':
                shipImage = '/cruiser.png';
                break;
            default:
                shipImage = '/destroyer.png';
                break;
        }
    } else {
        switch (ship) {
            case 'battleship':
                shipImage = '/battleship2.png';
                break;
            case 'submarine':
                shipImage = '/submarine2.png';
                break;
            case 'cruiser':
                shipImage = '/cruiser2.png';
                break;
            default:
                shipImage = '/destroyer2.png';
                break;
        }
    }

    return (
        <img className={size + ' object-contain z-20'} src={shipImage} alt="" />
    )
}

export default ShipImage