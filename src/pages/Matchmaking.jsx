import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Matchmaking = () => {
  const info = useSelector(store => store.AuthReducer);
  const navigate = useNavigate();
  console.log(info);

  useEffect(() => {
    // Crear e inyectar el primer script del chatbot
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'; // Reemplaza con la URL real del primer script
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = "https://mediafiles.botpress.cloud/eee5251d-0f6a-4452-b0d3-daf036697196/webchat/config.js"; 
    script2.async = true;

    // Inyectar el primer script
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Función de limpieza que se ejecutará al desmontar el componente
    return () => {
      // Eliminar scripts del DOM
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      // Opcional: Restablecer cualquier cambio realizado por los scripts del chatbot
      const botonChatbot = document.querySelector('.bpw-widget-btn.bpw-floating-button');
      if (botonChatbot) {
        botonChatbot.style.zIndex = '';
      }
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez

  const handleJoinClick = async () => {
    const { value: text } = await Swal.fire({
      title: 'Enter the party code:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Join',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: (inputText) => {
        // You can process the input text here if needed
        return inputText;
      },
      allowOutsideClick: () => !Swal.isLoading(),
      customClass: {
        confirmButton: 'bg-blue-300 text-white hover:bg-blue-600',
        cancelButton: 'bg-red-500 text-white hover:bg-red-600',
        container: 'bg-gray-900 text-black',
        popup: 'bg-gradient-to-tr from-slate-600 via-slate-900 to-slate-600',
      }
    });

    if (text) {
      try {
        const response = await axios.post('http://localhost:8080/api/match/join', { partyCode: text }, {
          headers: {
            Authorization: `Bearer ${info.token}`
          }
        });

        Swal.fire({
          title: 'Success',
          text: 'Joining to the battle',
          icon: 'success'
        });
      navigate('/waiting');
        
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Party code incorrect',
          icon: 'error'
        });
      }
    }
  };

  const handleCreateMatch = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/match/create', {}, {
        headers: {
          Authorization: `Bearer ${info.token}`
        }
      });

      const result = await Swal.fire({
        title: 'Match Created',
        icon: 'success',
      });

      if (result.isConfirmed) {
        navigate('/waiting');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong',
        icon: 'error'
      });
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen"
      style={{
        backgroundImage: "url('../mm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div style={{ backdropFilter: "blur(8px)" }} className="flex flex-col w-full max-w-screen-xl border-4 p-6 md:p-12 justify-evenly">
          <div className="flex flex-col items-center w-full mb-8 sm:mb-4">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm md:text-base px-6 py-3 md:px-8 md:py-4 text-center mb-4 w-full"
              onClick={handleCreateMatch}
            >
              CREATE MATCH
            </button>
          </div>
          <div className="flex flex-col items-center w-full mb-8 sm:mb-4">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm md:text-base px-6 py-3 md:px-8 md:py-4 text-center mb-4 w-full"
              onClick={handleJoinClick}
            >
              JOIN TO PARTY
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Matchmaking;
