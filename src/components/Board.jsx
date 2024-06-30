import React, { useEffect, useRef, useState } from 'react';
import Tile from './Tile';
import Ship from './Ship';

const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Board = () => {
  // Se inicializa como array vacío donde se guardarán los barcos como objetos, estos serán los barcos en el tablero
  const [ships, setShips] = useState([]);
  const shipsRef = useRef(ships);

  useEffect(() => {
    shipsRef.current = ships;
  }, [ships]);

  const getUsedTiles = (ships) => {
    return ships.map(ship => ship.tileId).flat();
  };

  console.log("Barcos en el tablero:", ships);
  console.log("Cuadros totales usados:", getUsedTiles(ships));

  // Cada vez que se ejecute onDrop se ejecuta la función handleDrop con los parametros que vienen desde el componente Tile
  const handleDrop = (item, tileId) => {
    const startY = tileId.charCodeAt(0) - 64; // Se obtiene el valor numérico del eje vertical
    const startX = parseInt(tileId.slice(1)); // Se obtiene como número el valor numérico del eje horizontal 
    let occupiedTiles = [];
    const usedTiles = getUsedTiles(shipsRef.current);

    console.log("X:", startX, "Y:", startY);
    console.log("Barco en horizontal:", item.horizontal);

    for (let i = 0; i < item.size; i++) {
      if (item.horizontal) {
        //Se obtiene el id del tile de la forma original que tenía pero se le suma i al eje horizontal si está en horizontal y si no, se le suma al vertical
        const newTileId = String.fromCharCode(64 + startY) + (startX + i);

        console.log("Cuadrados totales usados ", usedTiles, " incluye ", newTileId, " ", usedTiles.includes(newTileId));

        if (startX + i > horizontalAxis.length || usedTiles.includes(newTileId)) {
          console.error("No puedes colocar un barco en esta ubicación");
          return;
        }
        occupiedTiles.push(newTileId);
      } else {
        const newTileId = String.fromCharCode(64 + startY + i) + (startX);

        console.log("Cuadrados totales usados incluye ", newTileId, " ", usedTiles.includes(newTileId));

        if (startY + i > verticalAxis.length || usedTiles.includes(newTileId)) {
          console.error("No puedes colocar un barco en esta ubicación");
          return;
        }
        occupiedTiles.push(newTileId);
      }
    }

    const newShip = { ...item, tileId: occupiedTiles, x: startX + 1, y: startY + 1 }; // Crea un nuevo objeto con las propiedades de item y le añade la propiedad tileId

    // Usa la función de actualización del estado anterior
    setShips((prevShips) => {
      // Elimina el barco en la nueva posición si ya hay uno y si el id de un barco ya existe en el array
      const updatedShips = prevShips.filter(
        ship => ship.id !== newShip.id
      );
      // Añade el nuevo barco a la posición
      return [...updatedShips, newShip];
    });
  };

  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      const tileId = horizontalAxis[i] + verticalAxis[j];
      // Crea un nuevo barco 
      const shipInTile = ships.find((ship) => ship.tileId.includes(tileId));

      if (shipInTile && shipInTile.tileId[0] === tileId) {
        board.push(
          <Tile id={tileId} key={tileId} onDrop={handleDrop}>
            {shipInTile && ( // Si hay un barco en la celda se renderizará el componente Ship
              <Ship
                id={shipInTile.id}
                type={shipInTile.type}
                x={0} // Propiedad con potencial uso
                y={0} // Propiedad con potencial uso
                horizontal={shipInTile.horizontal}
                size={shipInTile.size}
              />
            )}
          </Tile>
        );
      } else {
        board.push(<Tile id={tileId} key={tileId} onDrop={handleDrop} />
        );
      }
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
      <div className="relative col-start-2 col-end-12 row-start-2 row-end-12 grid grid-cols-10 grid-rows-10 border-2 border-white bg-opacity-0 w-[500px] h-[500px]">
        {board}
      </div>
    </div>
  );
};

export default Board;
