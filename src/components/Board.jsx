import React, { useState } from 'react';
import Tile from './Tile';
import Ship from './Ship';

const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Board = () => {
  // Se inicializa como array vacío donde se guardarán los barcos como objetos
  const [ships, setShips] = useState([]);

  // Cada vez que se ejecute onDrop se ejecuta la función handleDrop con los parametros que vienen desde el componente Tile
  const handleDrop = (item, tileId) => {
    console.log(ships);
    console.log(tileId);
    const newShip = { ...item, tileId }; // Crea un nuevo objeto con las propiedades de item y le añade la propiedad tileId
    // Se usa prevShips en lugar de setShips([...ships, newShip]) para garantizar obtener el estado más reciente de los barcos
    setShips((prevShips) => [...prevShips, newShip]);
  };

  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      const tileId = horizontalAxis[i] + verticalAxis[j];
      const shipInTile = ships.find((ship) => ship.tileId === tileId);

      board.push(
        <Tile id={tileId} key={tileId} onDrop={handleDrop}>
          {shipInTile && ( // Si hay un barco en la celda se renderizará el componente Ship
            <Ship
              type={shipInTile.type}
              x={0} // Propiedad con potencial uso
              y={0} // Propiedad con potencial uso
              horizontal={shipInTile.horizontal}
              size={shipInTile.size}
            />
          )}
        </Tile>
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
