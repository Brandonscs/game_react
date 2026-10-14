import React, { useState } from 'react';
import './game2.css';

export const Game2: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [pos, setPos] = useState({ x: 5, y: 5 });
  const [win, setWin] = useState(false);

  const move = (dx: number, dy: number) => {
    if (win) return;
    setPos((prev) => {
      const newX = Math.min(Math.max(5, prev.x + dx), 205);
      const newY = Math.min(Math.max(5, prev.y + dy), 205);
      
      // Condición de victoria: llegar a la esquina inferior derecha (>= 200)
      if (newX >= 200 && newY >= 200) {
        setWin(true);
      }
      return { x: newX, y: newY };
    });
  };

  const resetGame = () => {
    setPos({ x: 5, y: 5 });
    setWin(false);
  };

  return (
    <div className="game2-container">
      <h2>🧩 Escape del Laberinto</h2>
      <p>Lleva el cubo rojo hasta la meta verde</p>

      <div className="maze-board">
        <div className="maze-target">META</div>
        <div className="maze-player" style={{ top: `${pos.y}px`, left: `${pos.x}px` }} />
      </div>

      {win && <div className="win-message">🎉 ¡Felicidades! Has completado el laberinto.</div>}

      <div className="dpad">
        <button className="dpad-btn btn-up" onClick={() => move(0, -50)}>⬆️</button>
        <button className="dpad-btn btn-left" onClick={() => move(-50, 0)}>⬅️</button>
        <button className="dpad-btn btn-down" onClick={() => move(0, 50)}>⬇️</button>
        <button className="dpad-btn btn-right" onClick={() => move(50, 0)}>➡️</button>
      </div>

      {win && <button className="dpad-btn" style={{ width: 'auto', padding: '0 15px', marginBottom: '10px' }} onClick={resetGame}>Reiniciar</button>}

      <button className="dpad-btn" style={{ width: 'auto', padding: '0 15px' }} onClick={onBack}>⬅ Volver</button>
    </div>
  );
};