import React from 'react';

import ShootBoard from './components/ShootBoard';
import AuthComponent from './components/AuthComponent';
//import MainLayout from './layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import  Ranking  from './pages/Ranking';
import Landing from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <div>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
};

export default App;
