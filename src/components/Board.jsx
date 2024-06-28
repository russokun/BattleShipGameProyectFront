import React from 'react';
import Tile from './Tile';

const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Board = () => {
  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      board.push(
        <Tile id={horizontalAxis[i] + verticalAxis[j]} key={horizontalAxis[i] + verticalAxis[j]}></Tile>
      );
    }
  }

  return (
    <div className="relative grid grid-cols-[auto_repeat(10,_1fr)] grid-rows-[auto_repeat(10,_1fr)] w-[520px] h-[520px]">
      {/* Números del 1 al 10 en la fila superior */}
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 flex justify-around items-center">
        {verticalAxis.map((number) => (
          <div key={number} className="w-[50px] h-[50px] flex justify-center items-center text-xl font-bold">
            {number}
          </div>
        ))}
      </div>
      
      {/* Letras de la A a la J en la columna izquierda */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-12 flex flex-col justify-around items-center">
        {horizontalAxis.map((letter) => (
          <div key={letter} className="w-[50px] h-[50px] flex justify-center items-center text-xl font-bold">
            {letter}
          </div>
        ))}
      </div>
      
      {/* El tablero de juego */}
      <div className="col-start-2 col-end-12 row-start-2 row-end-12 grid grid-cols-10 grid-rows-10 border-2 border-white bg-opacity-0 w-[500px] h-[500px]">
        {board}
      </div>
    </div>
  );
};

export default Board;
