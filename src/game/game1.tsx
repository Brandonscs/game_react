// src/game/game1.tsx
import React, { useState } from 'react';
import './game1.css';

export const Game1: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [score, setScore] = useState(0);

  return (
    <div className="game1-container">
      <h2>🪙 Arcade Clicker</h2>
      <h3>Monedas: {score}</h3>
      <button className="coin-btn" onClick={() => setScore(score + 1)}>🪙</button>
      <br />
      <button className="back-btn" onClick={onBack}>⬅ Volver al Menú</button>
    </div>
  );
};