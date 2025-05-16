// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import WorkshopInfo from './components/WorkshopInfo/WorkshopInfo';
import Survey from './pages/Survey';
import ProfileSearch from './components/ProfileSearch/ProfileSearch';
import './App.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a nuestro Workshop de Perfiles DiSC</h1>
        <p>Haz clic en el botón para comenzar la encuesta.</p>
      </header>
      <div className="home-buttons">
        <button onClick={() => navigate('/survey')}>Comenzar Encuesta</button>
        <p>¿Ya tienes un código de perfil?</p>
        <button onClick={() => navigate('/profile')}>Buscar mi perfil</button>
      </div>
      {/* Se incluye la información del workshop abajo (se adapta tal como se muestra en WorkshopInfo) */}
      <WorkshopInfo />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/profile" element={<ProfileSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
