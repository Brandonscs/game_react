import React from 'react';
import './inicio.css';

interface InicioProps {
  onSelectGame: (gameId: number) => void;
}

export const Inicio: React.FC<InicioProps> = ({ onSelectGame }) => {
  return (
    <div className="retro-container">
      <h1 className="retro-title">🎮 Game-React</h1>
      <p style={{ marginBottom: '20px', color: '#8c8c8c' }}>SELECCIONA UN JUEGO</p>
      
      <div className="menu-grid">
        <button className="menu-card" onClick={() => onSelectGame(1)}>
          🕹️ Minijuego 1<br /><small>Clicker Arcade</small>
        </button>
        <button className="menu-card" onClick={() => onSelectGame(2)}>
          📦 Minijuego 2<br /><small>Arrastrar Objeto</small>
        </button>
        <button className="menu-card" onClick={() => onSelectGame(3)}>
          🎯 Minijuego 3<br /><small>Atrapa el Círculo</small>
        </button>
        <button className="menu-card" onClick={() => onSelectGame(4)}>
          🧠 Minijuego 4<br /><small>Memoria Flash</small>
        </button>
      </div>
    </div>
  );
};