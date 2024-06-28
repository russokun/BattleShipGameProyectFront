import React from 'react';
import Chatbot from '../components/ChatBot';

const Matchmaking = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('./background.jpg')] bg-cover relative">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="flex w-full justify-evenly flex-wrap">
          <div className="flex flex-col items-center w-full sm:w-[35%] mb-8 sm:mb-4">
            <img src="world-warships.webp" alt="Image 1" className="w-full h-[90%] object-cover rounded-lg" />
            <button className="mt-2 px-4 py-2 bg-[#5A72A0] text-white rounded hover:bg-[#0D2E5E] transform hover:scale-105 transition duration-300">
              CREATE MATCH
            </button>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[35%] mb-8 sm:mb-4">
            <img src="JOIN.jpg" alt="Image 2" className="w-full h-[90%] object-cover rounded-lg" />
            <button className="mt-2 px-4 py-2 bg-[#5A72A0] text-white rounded hover:bg-[#0D2E5E] transform hover:scale-105 transition duration-300">
              JOIN MATCH
            </button>
          </div>
        </div>
      </main>
      <Chatbot />
    </div>
  );
}

export default Matchmaking;
