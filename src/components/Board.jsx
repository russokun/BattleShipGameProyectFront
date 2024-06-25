import React from 'react';
import Tile from './Tile';

const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Board = ({ handleDrop }) => {
  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      board.push(
        <Tile key={horizontalAxis[i] + verticalAxis[j]} onDrop={(item) => handleDrop(item, i, j)} > {horizontalAxis[i] + verticalAxis[j]}</Tile>
      );
    }
  }

  return (
    <div className='relative grid grid-cols-10 grid-rows-10 border-2 border-white bg-opacity-0 w-[500px] h-[500px]'>
      {board}
    </div>
  );
};

export default Board;
