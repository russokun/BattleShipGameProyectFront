import React from 'react';
import Swal from 'sweetalert2';
import Chatbot from '../components/ChatBot';
import { useSelector } from 'react-redux';

const Matchmaking = () => {
  const info = useSelector(store => store.AuthReducer)
  console.log(info);
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
      customClass:{
        confirmButton: 'bg-blue-300 text-white hover:bg-blue-600',
        cancelButton: 'bg-red-500 text-white hover:bg-red-600',
        container: 'bg-gray-900 text-black',
        popup: 'bg-gradient-to-tr from-slate-600 via-slate-900 to-slate-600 text-white',
      }
    });

    if (text) {
      Swal.fire({
        title: 'Enter party code:',
        text: text,
        icon: 'success'
      });
    }
  }
  
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
      <Chatbot />
    </div>
  );
};

export default Matchmaking;
