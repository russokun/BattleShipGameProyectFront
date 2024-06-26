import React from 'react';
import Board from './components/shootBoard';
import AuthComponent from './components/authComponent';
import './App.css';

const App = () => {
  return (
    <div className=" w-full h-screen background-image content-center">
      <AuthComponent />
    </div>
  );
};

export default App;