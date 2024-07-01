import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Waiting = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [opponentInfo, setOpponentInfo] = useState(null);
  const [partyCode, setPartyCode] = useState('');
  const navigate = useNavigate();
  const info = useSelector(store => store.AuthReducer);

  const waitingOpponent = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/match/current", {
        headers: {
          Authorization: `Bearer ${info.token}`
        }
      });
      const { partyCode, playerMatches } = response.data;
      const infoUser = playerMatches[0];
      const infoOpponent = playerMatches[1];
      setUserInfo(infoUser);
      setOpponentInfo(infoOpponent);
      setPartyCode(partyCode);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(partyCode).then(() => {
      Swal.fire({
        title: 'Copied!',
        text: 'Party code copied to clipboard',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
      });
    }).catch(err => {
      console.log('Something went wrong', err);
    });
  };

  useEffect(() => {
    waitingOpponent();
  }, []);

  useEffect(() => {
    if (userInfo && opponentInfo) {
      navigate("/game");
    }
  }, [userInfo, opponentInfo, navigate]);

  useEffect(() => {
    waitingOpponent();
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWM0Zmx4bnVobnpnd2I5d3V4NWxkZjg0MDd1NGVmamdqdGFwNHgxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D7YVWFBpm36UDWTM9q/giphy.gif')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='max-w-screen-xl flex flex-col justify-center items-center p-4 border-yellow-300 border-4 mb-8' style={{ backdropFilter: 'blur(8px)' }}>
        <h1 className="text-2xl font-bold mb-4 text-black bg-white px-4 py-2">Waiting for Opponent</h1>
        {partyCode && (
          <div className="flex items-center mb-4 bg-white">
            <p className="text-lg mr-2 font-bold text-black bg-white px-4 py-2">Your party code is: {partyCode}</p>
            <img
              className='w-[40px] bg-white cursor-pointer'
              src="/copyCode.png"
              alt="Copy Party Code"
              onClick={copyToClipboard}
            />
          </div>
        )}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-full justify-center">
          {userInfo ? (
            <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-96">
              <h2 className="text-xl font-bold mb-2">Your Info</h2>
              <p><strong>Username:</strong> {userInfo.username}</p>
              <p><strong>Status:</strong> {userInfo.type === 'WAITING_FOR_OPPONENT' ? 'Waiting for opponent' : userInfo.type.toLowerCase()}</p>
            </div>
          ) : (
            <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-96">
              <h2 className="text-xl font-bold mb-2">Your Info</h2>
              <p>Loading your info...</p>
            </div>
          )}
          {opponentInfo ? (
            <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-96">
              <h2 className="text-xl font-bold mb-2">Opponent Info</h2>
              <p><strong>Username:</strong> {opponentInfo.username}</p>
              <p><strong>Email:</strong> {opponentInfo.email}</p>
            </div>
          ) : (
            <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-96">
              <h2 className="text-xl font-bold mb-2">Opponent Info</h2>
              <p>Searching opponent...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Waiting;
