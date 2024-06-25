import React from 'react';
import Board from './components/board';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen background-image">
      <h1>Batalla Naval :V</h1>
        <Board />
    </div>
  );
};

export default App;