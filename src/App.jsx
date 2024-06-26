import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Ranking } from './pages/Ranking';
import MainLayout from './Layouts/MainLayout';

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
