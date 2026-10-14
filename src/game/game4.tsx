import React, { useState } from 'react';
import './game4.css';

const COLORS = ['red', 'blue', 'green', 'yellow'];

export const Game4: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [userStep, setUserStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [message, setMessage] = useState('Presiona Iniciar');

  const startGame = () => {
    const firstColor = COLORS[Math.floor(Math.random() * 4)];
    setSequence([firstColor]);
    setUserStep(0);
    setIsPlaying(true);
    setMessage('¡Memoriza!');
    playSequence([firstColor]);
  };

  const playSequence = (seq: string[]) => {
    seq.forEach((col, idx) => {
      setTimeout(() => {
        setActiveColor(col);
        setTimeout(() => setActiveColor(null), 400);
      }, (idx + 1) * 700);
    });
  };

  const handleColorClick = (color: string) => {
    if (!isPlaying) return;

    if (color === sequence[userStep]) {
      if (userStep + 1 === sequence.length) {
        // Nivel completado
        setMessage('¡Bien! Siguiente nivel...');
        setUserStep(0);
        const nextColor = COLORS[Math.floor(Math.random() * 4)];
        const newSeq = [...sequence, nextColor];
        setSequence(newSeq);
        setTimeout(() => playSequence(newSeq), 1000);
      } else {
        setUserStep(userStep + 1);
      }
    } else {
      setMessage('❌ ¡Fallaste! Inténtalo de nuevo');
      setIsPlaying(false);
    }
  };

  return (
    <div className="game4-container">
      <h2>🧠 Simón Dice Retro</h2>
      <p>{message}</p>
      <p>Nivel: {sequence.length}</p>

      <div className="simon-grid">
        {COLORS.map((col) => (
          <button
            key={col}
            className={`simon-btn ${col} ${activeColor === col ? 'active' : ''}`}
            onClick={() => handleColorClick(col)}
          />
        ))}
      </div>

      {!isPlaying && (
        <button className="dpad-btn" style={{ width: 'auto', padding: '10px 20px', marginBottom: '15px' }} onClick={startGame}>
          ▶️ Iniciar Juego
        </button>
      )}

      <button className="dpad-btn" style={{ width: 'auto', padding: '10px 20px' }} onClick={onBack}>⬅ Volver</button>
    </div>
  );
};