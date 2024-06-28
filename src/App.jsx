import React from 'react';
import Landing from './pages/LandingPage';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Ranking } from './pages/Ranking';
import  AuthComponent  from './components/AuthComponent';
import Matchmaking from './pages/Matchmaking';
import Game from './pages/Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



const App = () => {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
      <div>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path="/auth" element={<AuthComponent />} />
            <Route path='/mm' element={<Matchmaking />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path='/game' element={< Game/>} />
            {/* <Route path='/shoot' element={< ShootBoard/>} /> */}
            {/* <Route path='/' element={< />} /> */}
          </Routes>
        </MainLayout>
      </div>
      </DndProvider>
    </Router>
  );
};

export default App;
