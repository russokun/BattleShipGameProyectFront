import React, { useState } from 'react';
import '../components/ChatBot.css'; // Asegúrate de importar tu archivo de estilos CSS aquí

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className={`w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer chatbot-button`}
        onClick={toggleChat}
      >
        <img src="chatbot.png" alt="Chatbot" className="w-full h-full object-cover rounded-full" />
      </div>
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-72 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 bg-[#071952] text-white text-lg">Chat</div>
          <div className="p-4 overflow-y-auto h-full">
            {/* Aquí puedes añadir tu lógica de chat */}
            <p>¡Hola! ¿En qué puedo ayudarte?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
