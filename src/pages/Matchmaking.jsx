import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from '@sweetalert2/react-content';
import Chatbot from '../components/ChatBot';

const Matchmaking = () => {
  const MySwal = withReactContent(Swal);

  const handleJoinClick = () => {
    MySwal.fire({
      title: 'Enter your text',
      input: 'text',
      inputPlaceholder: 'Type something...',
      showCancelButton: true,
      confirmButtonText: 'Join',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: (text) => {
        if (!text) {
          MySwal.showValidationMessage('Please enter some text');
        }
        return text;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const text = result.value;
        console.log('Entered text:', text);
        Swal.fire('Success!', `You joined with text: ${text}`, 'success');
      }
    });
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
