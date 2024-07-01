import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Swal from 'sweetalert2'; 
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';


const ShootBoard = ({ enemyPlayer, currentPlayer }) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const token = useSelector(store => store.AuthReducer.token);
  const navigate = useNavigate();

  const [hits, setHits] = useState(new Set()); // Guarda los IDs de las celdas que son "hits"
  const [misses, setMisses] = useState(new Set()); // Guarda los IDs de las celdas que son "misses"
  const [shoot, setShoot] = useState([]);

  const handleCellClick = (cellId) => {
    const youTurn = currentPlayer.turn;
    const enemyBoard = enemyPlayer.id;
    const startY = cellId.charCodeAt(0) - 64;
    const startX = parseInt(cellId.slice(1));

    const newCords = { cordX: startX, cordY: startY };
    console.log('Disparo a:', newCords);

    if (youTurn) {
      axios.post('http://localhost:8080/api/shoot/' + enemyBoard, newCords, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          const shootResponse = response.data;
          console.log('Datos de barcos enviados correctamente:', shootResponse);
          if (shootResponse == 'Miss!') {
            toast.warn('Miss!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
            setMisses(new Set(misses).add(cellId));
          } else {
            toast.success(shootResponse, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });
            setHits(new Set(hits).add(cellId));
          }
          if (shootResponse=='You won!') {
            Swal.fire({
              title: currentPlayer.username+', you won!',
              width: 600,
              padding: "3em",
              color: "#716add",
              background: "#fff url(/winner_background.jpg)",
              backdrop: `
                rgba(0,0,123,0.4)
                url("/winner.gif")
                left top
                no-repeat
              `
            });
            navigate('/mm');
          }

        })
        .catch(error => {
          console.error('Error al enviar datos de barcos:', error);
        });
    } else {
      toast.error('Is not your turn', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
  };


  const renderHeaderRow = () => (
    <div className="flex">
      <div className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]"></div> {/* Espacio vacío para la esquina superior izquierda */}
      {numbers.map((number) => (
        <div key={number} className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] flex justify-center items-center font-bold text-xl">
          {number}
        </div>
      ))}
    </div>
  );

  const renderBoard = () => {
    return (
      <>
        {renderHeaderRow()}
        {letters.map((letter, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            <div className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] flex justify-center items-center font-bold text-xl">
              {letter}
            </div>
            {numbers.map((number) => {
              const cellId = `${letter}${number}`;
              const isHit = hits.has(cellId);
              const isMiss = misses.has(cellId);
              return (
                <div
                  key={cellId}
                  id={cellId}
                  className={`md:w-[50px] md:h-[50px] w-[30px] h-[30px] border border-gray-800 flex justify-center items-center cursor-pointer ${isHit ? 'bg-red-500 text-white' : ''} ${isMiss ? 'bg-gray-400' : ''}`}
                  onClick={() => handleCellClick(cellId)}
                >
                  {isHit ? 'X' : ''}
                </div>
              );
            })}
          </div>
        ))}
      </>
    );
  };

  return <div className="flex flex-col items-center ">{renderBoard()}</div>;
};

export default ShootBoard;