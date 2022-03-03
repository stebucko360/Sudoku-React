import './App.css';
import { GameBoard } from './components/GameBoard';
import { Header } from './components/Header';
import { NumberButtons } from './components/NumberButtons';
import { useState } from 'react';
import { gameBoardCreator } from './utils/utils'

function App() {

  const [gameBoard, setGameBoard] = useState(gameBoardCreator(9,9))
  const [selected, setSelected] = useState()

  return (
    <div className="App">
      <Header/>
      <GameBoard gameBoard={gameBoard} setSelected={setSelected}/>
      <NumberButtons setGameBoard={setGameBoard} selected={selected}/>
    </div>
  );
}

export default App;
