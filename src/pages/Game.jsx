import React, { useEffect, useState } from 'react';
import Board from '../components/Board';
import ShipContainer from '../components/ShipContainer';
import ShootBoard from '../components/ShootBoard';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Game = () => {
  const [showShipContainer, setShowShipContainer] = useState(true);
  const [data, setData] = useState([]);
  const token = useSelector(store => store.AuthReducer.token);
  const info = useSelector(store => store.AuthReducer);
  let currentPlayer;
  let enemyPlayer;
  let score1 = 0;
  let score2 = 0;
  let username1 = '';
  let username2 = '';

  useEffect(() => {
    axios.get('http://localhost:8080/api/match/current', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  useEffect(() => {
    if (data.playerMatches) {
      console.log('data ',data);
      currentPlayer = data.playerMatches.find(player => player.username === info.user.username);
      enemyPlayer = data.playerMatches.find(player => player.username !== info.user.username);
      score1=currentPlayer.account.score;
      score2=enemyPlayer.account.score;
      username1=currentPlayer.username;
      username2=enemyPlayer.username;
    }
  }, [data])

  return (
    <div className="flex flex-col relative items-center justify-center w-full min-h-screen bg-cover gap-10 bg-[url('/background.jpeg')] p-6">
      <div className='flex flex-wrap md:gap-5 gap-20 flex-col md:flex-row'>
        <div className='flex relative flex-col justify-center items-center md:flex-row flex-wrap'>
          <ShipContainer show={showShipContainer} />
          <Board setShowShipContainer={setShowShipContainer} currentPlayer={currentPlayer} enemyPlayer={enemyPlayer} data={data} />
        </div>
        <div className='mt-[28px]'>
          <ShootBoard />
        </div>
      </div>
      <div className='flex w-[90vw] h-[100px] md:w-[60vw] justify-center items-center border-blue-500 border border-white rounded-md mb-8 backdrop-blur'>
        <div className='flex flex-col border border-white rounded-md h-[100%] w-[50%] p-4 '>
          <div className='flex justify-between'>
            <h2 className='font-bold'>You: </h2>
            <p>{username1}</p>
          </div>
          <div className='flex justify-between'>
            <h2 className='font-bold'>Score: </h2>
            <p>{score1}</p>
          </div>
        </div>
        <div className='flex flex-col border border-white rounded-md h-[100%] w-[50%] p-4 '>
          <div className='flex justify-between'>
            <h2 className='font-bold'>Enemy: </h2>
            <p>{username2}</p>
          </div>
          <div className='flex justify-between'>
            <h2 className='font-bold'>Score: </h2>
            <p>{score2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
