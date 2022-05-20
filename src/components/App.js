import { useState } from 'react';
import GameContext from './context/game-context.js';
import Login from './Login/Login.js';
import Game from './Game/Game.js';
import ScoreBoard from './Game/ScoreBoard.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import API_DATA  from '../api_data.js';

import classes from './App.module.scss';

const selectedGame = API_DATA[Math.floor(Math.random()*API_DATA.length)];

function App() {
  const [userName, setUserNameState] = useState('');
  const [userScore, setUserScore] = useState(0);

  const userNameHandler = (userNameState) => {
    setUserNameState(userNameState)
  }

  const userScoreHandler = (userScoreState) => {
    setUserScore(userScoreState)
  }

  return (
    <GameContext.Provider value={{
      userName: userName,
      game: selectedGame,
      userScore: userScore
    }}>
    <main className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login setUserName={userNameHandler} />} /> 
          <Route path="game" element={<Game userScore={userScoreHandler} />} /> 
          <Route path='score' element={<ScoreBoard />} />
        </Routes>
      </BrowserRouter>
    </main>
    </GameContext.Provider>
  );
}

export default App;
