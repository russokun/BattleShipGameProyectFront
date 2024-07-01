import React from 'react';
import Landing from './pages/LandingPage';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { Ranking } from './pages/Ranking';
import Registercomponent from './components/Register'; // Corregido el nombre
import Logincomponent from './components/Login'; // Corregido el nombre
import Matchmaking from './pages/Matchmaking';
import Game from './pages/Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AppRoutes = () => {
  const location = useLocation();
  
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/register';
  
  return (
    <div>
      {isAuthRoute ? (
        <Routes>
          <Route path='/register' element={<Registercomponent />} />
          <Route path='/login' element={<Logincomponent />} />
        </Routes>
      ) : (
        <MainLayout>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/mm' element={<Matchmaking />} />
            <Route path='/ranking' element={<Ranking />} />
            {/* Otras rutas con MainLayout */}
            {/* <Route path='/shoot' element={<ShootBoard />} /> */}
            <Route path='/game' element={<Game />} />
          </Routes>
        </MainLayout>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
      <AppRoutes />
      <ToastContainer />
      </DndProvider>
    </Router>
  );
};

export default App;
