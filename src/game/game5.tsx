import React, { useState } from 'react';
import './game5.css';

type Player = 'X' | 'O' | null;

export const Game5: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const calculateWinner = (squares: Player[]): Player => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
      [0, 4, 8], [2, 4, 6],          // Diagonales
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  let status = `Turno de: ${isXNext ? '❌ (X)' : '⭕ (O)'}`;
  if (winner) {
    status = `🎉 ¡Ganador: ${winner === 'X' ? '❌' : '⭕'}!`;
  } else if (isDraw) {
    status = '🤝 ¡Empate!';
  }

  return (
    <div className="game5-container">
      <h2>❌ Tic-Tac-Toe Neón ⭕</h2>
      <div className="status-text">{status}</div>

      <div className="tictactoe-board">
        {board.map((value, idx) => (
          <div
            key={idx}
            className={`cell ${value === 'O' ? 'o' : ''}`}
            onClick={() => handleClick(idx)}
          >
            {value}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="dpad-btn" style={{ width: 'auto', padding: '10px 15px' }} onClick={resetGame}>
          🔄 Reiniciar
        </button>
        <button className="dpad-btn" style={{ width: 'auto', padding: '10px 15px' }} onClick={onBack}>
          ⬅ Volver
        </button>
      </div>
    </div>
  );
};