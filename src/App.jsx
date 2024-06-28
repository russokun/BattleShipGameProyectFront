import React from 'react';

import MainLayout from './Layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Ranking } from './pages/Ranking';
import Matchmaking from './pages/Matchmaking';


const App = () => {
  return (
    <Router>
      <div>
        <MainLayout>
          <Routes>
            <Route path='/*' element={<Matchmaking />} />
            {/* <Route path="/*" element={<Ranking />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
};

export default App;
