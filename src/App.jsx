import React from 'react';
import Landing from './pages/LandingPage';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Ranking } from './pages/Ranking';
import  AuthComponent  from './components/AuthComponent';
import Matchmaking from './pages/Matchmaking';
import ShootBoard from './components/ShootBoard';
import Board from './components/Board';


const App = () => {
  return (
    <Router>
      <div>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path="/auth" element={<AuthComponent />} />
            <Route path='/mm' element={<Matchmaking />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/ranking" element={<Ranking />} />
            {/* {<Route path='/shoot' element={< ShootBoard/>} />
            <Route path='/board' element={< Board/>} />}  */}
            {/* <Route path='/' element={< />} /> */}
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
};

export default App;
