import React, { useState } from 'react';
import './game3.css';

export const Game3: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [score, setScore] = useState(0);
  const [pos, setPos] = useState({ top: 120, left: 120 });

  const handleCatch = () => {
    setScore(score + 1);
    // Generar nueva posición aleatoria dentro del área (300x300)
    const newTop = Math.floor(Math.random() * 240);
    const newLeft = Math.floor(Math.random() * 240);
    setPos({ top: newTop, left: newLeft });
  };

  return (
    <div className="game3-container">
      <h2>👻 Atrapa al Fantasma</h2>
      <h3>Puntos: {score}</h3>

      <div className="game3-area">
        <span 
          className="target-ghost" 
          style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
          onClick={handleCatch}
        >
          👻
        </span>
      </div>

      <button className="dpad-btn" style={{ width: 'auto', padding: '10px 20px' }} onClick={onBack}>⬅ Volver</button>
    </div>
  );
};