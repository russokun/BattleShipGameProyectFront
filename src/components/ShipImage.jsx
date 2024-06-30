import React from 'react'

const ShipImage = ({ ship, size, horizontal }) => {

    let orientation;
    if (!horizontal) {
        orientation = 'rotate-90';
    }else {
        orientation = 'rotate-0';
    }

    let shipImage;
    switch (ship) {
        case 'battleship':
            shipImage = '/battleship.png';
            break;

        case 'cruiser':
            shipImage = '/cruiser.png';
            break;

        case 'submarine':
            shipImage = '/submarine.png';

            break;
    
        default:
            shipImage = '/destroyer.png';
            break;
    }

  return (
    <img className={size + ' object-contain '+ orientation} src={shipImage} alt="" />
  )
}

export default ShipImage