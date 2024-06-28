import React from 'react';
import Landing from './pages/LandingPage';
import MainLayout from './Layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Ranking } from './pages/Ranking';
import  AuthComponent  from './components/AuthComponent';
import Matchmaking from './pages/Matchmaking';


const App = () => {
  return (
    <Router>
      <div>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path="/auth" element={<AuthComponent />} />
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
