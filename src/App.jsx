import React from 'react';

import MainLayout from './Layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Ranking } from './pages/Ranking';

const App = () => {
  return (
    <Router>
      <div>
        <MainLayout>
          <Routes>
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
};

export default App;
