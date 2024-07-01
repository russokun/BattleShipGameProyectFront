import React, { useEffect, useState } from 'react';
import Board from '../components/Board';
import ShipContainer from '../components/ShipContainer';
import ShootBoard from '../components/ShootBoard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Game = () => {
  const [showShipContainer, setShowShipContainer] = useState(true);
  const [data, setData] = useState([]);
  const token = useSelector(store => store.AuthReducer.token);
  const info = useSelector(store => store.AuthReducer);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [enemyPlayer, setEnemyPlayer] = useState({});
  const [shoots, setShoots] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalID = setInterval(() => {
      axios.get('https://battleshipgame-6yqq.onrender.com/api/match/current', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          setData({ ...data, ...response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
    return () => clearInterval(intervalID);
  }, [])

  useEffect(() => {
    if (data.playerMatches) {
      let newShoots = [];
      console.log('data ', data);
      setCurrentPlayer({ ...currentPlayer, ...data.playerMatches.find(player => player.username === info.user.username) });
      setEnemyPlayer({ ...enemyPlayer, ...data.playerMatches.find(player => player.username !== info.user.username) });
      if (Array.isArray(currentPlayer.boards) && currentPlayer.boards.length > 0) {
        newShoots = currentPlayer.boards[0].shoots
        console.log('nuevos disparos:', newShoots);
        setShoots(newShoots);
      }
      console.log('shoots', shoots);
      console.log('players', currentPlayer, enemyPlayer);
      if (shoots.length > 0) {
        setCoordinates(shoots.map(coord => {
          const letterY = String.fromCharCode(64 + coord.cordY); // Suponiendo que usas cordY para las coordenadas
          return letterY + coord.cordX; // Suponiendo que usas cordX para las coordenadas
        }));
        console.log('coordenadas mapeadas:', coordinates);
      }
    }
    if (currentPlayer.type == 'LOSE') {
      Swal.fire({
        title: "You lose!",
        text: "Try again next time!",
        imageUrl: "/Loser.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      navigate('/mm');
    }
  }, [data])


  return (
    <div className="flex flex-col items-center relative items-center justify-center gap-10 w-full min-h-screen bg-cover bg-[url('/background.jpg')] p-6">
        <h2 className='text-5xl pt-2'>{currentPlayer.turn ? 'Your Turn' : 'Enemy Turn'}</h2>
      <div className='flex flex-wrap md:gap-5 gap-20 flex-col md:flex-row'>
        <div className='flex relative flex-col justify-center items-center md:flex-row flex-wrap'>
          <ShipContainer show={showShipContainer} />
          <Board coordinates={coordinates} setShowShipContainer={setShowShipContainer} currentPlayer={currentPlayer} enemyPlayer={enemyPlayer} data={data} />
        </div>
        <div className='mt-[28px]'>
          <ShootBoard enemyPlayer={enemyPlayer} currentPlayer={currentPlayer} />
        </div>
      </div>
      <div className='flex w-[90vw] h-[80px] md:w-[60vw] justify-center items-center border-blue-500 border border-white rounded-md mb-8 backdrop-blur'>
        <div className='flex flex-col border justify-center items-center border-white rounded-md h-[100%] w-[50%] p-4 '>
          <div className='flex gap-3 justify-around items-center'>
            <h2 className='font-bold text-3xl'>You: </h2>
            <p className='text-3xl'>{currentPlayer.username}</p>
          </div>
        </div>
        <div className='flex flex-col border justify-center items-center border-white rounded-md h-[100%] w-[50%] p-4 '>
          <div className='flex gap-3 justify-around items-center'>
            <h2 className='font-bold text-3xl'>Enemy: </h2>
            <p className='text-3xl'>{enemyPlayer.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
