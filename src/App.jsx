import React from 'react';
import ShootBoard from './components/shootBoard';
import AuthComponent from './components/authComponent';
import MainLayout from './layouts/mainLayout';
import './App.css';

const App = () => {
  return (
    <div className=" w-full h-screen content-center">
      <MainLayout />
    </div>
  );
};

export default App;