import React, { useEffect, useRef, useState } from 'react';
import Tile from './Tile';
import Ship from './Ship';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { useSelector } from 'react-redux';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Board = ({ setShowShipContainer }) => {
  // Se inicializa como array vacío donde se guardarán los barcos como objetos, estos serán los barcos en el tablero
  const [ships, setShips] = useState([]);
  const shipsRef = useRef(ships);
  const token = useSelector(store => store.AuthReducer.token);
  const [isReady, setIsReady] = useState(false);
  const [keyForRerender, setKeyForRerender] = useState(0); // Clave para forzar un re-render

  const errorToastify = () => {
    toast.error('You cannot place a ship in this location', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }

  const errorToastifyRotate = () => {
    toast.info('Please try to flip the ship in another position', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }

  useEffect(() => {
    shipsRef.current = ships;
  }, [ships]);

  useEffect(() => {
    // Forzar re-render al cambiar isReady
    if (isReady) {
      setShips([...ships]);
      setKeyForRerender(prevKey => prevKey + 1); // Incrementar la clave para forzar un re-render completo
    }
  }, [isReady]);

  const getUsedTiles = (ships) => {
    return ships.map(ship => ship.tileId).flat();
  };

  // Función para enviar los datos de los barcos
  const sendShipData = () => {
    if (shipsRef.current.length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Unfilled board',
        text: 'Please position all ships.',
    });
      return;
    }Swal.fire({
      title: "Are you sure of the position of your ships on the board?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm Position!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ready to start!",
          text: " Your ships are in position.",
          icon: "success"
        });
        const shipsData = shipsRef.current.map(ship => ({ // Se mapea el array de barcos para que contenga el tipo y las coordenadas
          type: ship.type,
          coordinates: ship.cords,
        }));
    
        console.log('Datos de barcos:', shipsData);
        // axios.post('http://localhost:8080/api/ranking', shipsData, {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // })
        //   .then(response => {
        //     console.log('Datos de barcos enviados correctamente:', response.data);
        //   })
        //   .catch(error => {
        //     console.error('Error al enviar datos de barcos:', error);
        //   });
    
        setIsReady(true);
        setShowShipContainer(false);
        // console.log("Ready", isReady);
      }
    });

  };

  // console.log("Barcos en el tablero:", ships);
  // console.log("Cuadros totales usados:", getUsedTiles(ships));

  // Cada vez que se ejecute onDrop se ejecuta la función handleDrop con los parametros que vienen desde el componente Tile
  const handleDrop = (item, tileId) => {
    if (isReady) return;

    const startY = tileId.charCodeAt(0) - 64; // Se obtiene el valor numérico del eje vertical
    const startX = parseInt(tileId.slice(1)); // Se obtiene como número el valor numérico del eje horizontal 
    let occupiedTiles = [];
    let occupiedCords = [];
    const usedTiles = getUsedTiles(shipsRef.current);
    const currentShip = shipsRef.current.find(ship => ship.id == item.id);
    let currentShipTiles = [];

    if (currentShip) {
      currentShipTiles = currentShip.tileId;

    }

    for (let i = 0; i < item.size; i++) {
      if (item.horizontal) {

        //Se obtiene el id del tile de la forma original que tenía pero se le suma i al eje horizontal si está en horizontal y si no, se le suma al vertical
        const newTileId = String.fromCharCode(64 + startY) + (startX + i);
        const newCord = { x: startX + i, y: startY };

        if (!currentShip) {
          if (startX + i > horizontalAxis.length || usedTiles.includes(newTileId)) {
            console.error("No puedes colocar un barco en esta ubicación");
            errorToastify();
            return true;
          }
        } else {
          if (startX + i > horizontalAxis.length || (usedTiles.includes(newTileId) && !currentShipTiles.includes(newTileId))) {
            console.error("No puedes colocar un barco en esta ubicación");
            errorToastify();
            return true;
          }
        }
        occupiedTiles.push(newTileId);
        occupiedCords.push(newCord);
      } else {

        const newTileId = String.fromCharCode(64 + startY + i) + (startX);
        const newCord = { x: startX, y: startY + i };

        if (!currentShip) {
          if (startY + i > verticalAxis.length || usedTiles.includes(newTileId)) {
            console.error("No puedes colocar un barco en esta ubicación");
            errorToastify();
            return true;
          }
        } else {
          if (startY + i > verticalAxis.length || (usedTiles.includes(newTileId) && !currentShipTiles.includes(newTileId))) {
            console.error("No puedes colocar un barco en esta ubicación");
            errorToastify();
            return true;
          }
        }
        occupiedTiles.push(newTileId);
        occupiedCords.push(newCord);
      }
    }

    const newShip = { ...item, tileId: occupiedTiles, cords: occupiedCords }; // Crea un nuevo objeto con las propiedades de item y le añade la propiedad tileId
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

  const handleShipClick = (ship) => {
    if (!shipsRef.current.includes(ship)) return; // Verifica que el barco esté en la lista de ships
  
    const updatedShip = { ...ship, horizontal: !ship.horizontal };
    if (handleDrop(updatedShip, updatedShip.tileId[0])) {
      errorToastifyRotate();
      return;
    }
  
    // Simula el drag and drop al hacer clic en un barco
    console.log('Barco clickeado:', updatedShip);
    
  
    // Forzar re-render para actualizar la vista
    setKeyForRerender(prevKey => prevKey + 1);
  };

  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
      const tileId = horizontalAxis[i] + verticalAxis[j];
      // Crea un nuevo barco 
      const shipInTile = ships.find((ship) => ship.tileId.includes(tileId));
      if (shipInTile && shipInTile.tileId[0] === tileId) {
        board.push(
          <Tile id={tileId} key={tileId} onDrop={handleDrop} isReady={isReady}>
            {shipInTile && ( // Si hay un barco en la celda se renderizará el componente Ship
              <Ship
                id={shipInTile.id}
                type={shipInTile.type}
                cords={shipInTile.cords}
                horizontal={shipInTile.horizontal}
                size={shipInTile.size}
                isReady={isReady}
                onClick={() => handleShipClick(shipInTile)} // Pasar la función de manejo de clic al Ship
              />
            )}
          </Tile>
        );
      } else {
        board.push(<Tile id={tileId} key={tileId} onDrop={handleDrop} isReady={isReady} />
        );
      }
    }
  }

  return (
    <div key={keyForRerender} className="relative grid grid-cols-[auto_repeat(10,_1fr)] grid-rows-[auto_repeat(10,_1fr)] md:w-[520px] md:h-[520px] w-[320px] h-[320px]">
      {/* Números del 1 al 10 en la fila superior */}
      <div className="col-start-2 col-end-12 row-start-1 row-end-2 flex justify-around items-center">
        {verticalAxis.map((number) => (
          <div key={number} className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] flex justify-center items-center text-xl font-bold">
            {number}
          </div>
        ))}
      </div>

      {/* Letras de la A a la J en la columna izquierda */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-12 flex flex-col justify-around items-center">
        {horizontalAxis.map((letter) => (
          <div key={letter} className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] flex justify-center items-center text-xl font-bold">
            {letter}
          </div>
        ))}
      </div>

      {/* El tablero de juego */}
      <div className="relative col-start-2 col-end-12 row-start-2 row-end-12 grid grid-cols-10 grid-rows-10 border-2 border-white bg-opacity-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        {board}
      </div>

      {/* Botón para enviar los datos de los barcos */}
      {!isReady && (
        <div className="absolute bottom-[-80px] left-[130px] md:bottom-[0px] md:left-[-130px] w-[200px] h-[60px] ">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            onClick={sendShipData}
          >
            I'm ready!
          </button>
        </div>
      )}
    </div>
  );
};

export default Board;
