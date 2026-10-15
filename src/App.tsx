import { useState } from 'react';
import { Inicio } from './game/inicio';
import { Game1 } from './game/game1';
import { Game2 } from './game/game2';
import { Game3 } from './game/game3';
import { Game4 } from './game/game4';
import { Game5 } from './game/game5';

export function App() {
  const [currentGame, setCurrentGame] = useState<number>(0);

  return (
    <div className="App">
      {currentGame === 0 && <Inicio onSelectGame={(id) => setCurrentGame(id)} />}
      {currentGame === 1 && <Game1 onBack={() => setCurrentGame(0)} />}
      {currentGame === 2 && <Game2 onBack={() => setCurrentGame(0)} />}
      {currentGame === 3 && <Game3 onBack={() => setCurrentGame(0)} />}
      {currentGame === 4 && <Game4 onBack={() => setCurrentGame(0)} />}
      {currentGame === 5 && <Game5 onBack={() => setCurrentGame(0)} />}
    </div>
  );
}

export default App;