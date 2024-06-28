import React from 'react';
import Landing from './pages/LandingPage';
import MainLayout from './Layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Ranking } from './pages/Ranking';
import  AuthComponent  from './components/AuthComponent';

const App = () => {
  return (
    <Router>
      <div>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/auth" element={<AuthComponent />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
};

export default App;
