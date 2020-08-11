import React from 'react'
import './App.css';
import Game from './components/game/Game'
import Scoreboard from './components/scoreboard/Scoreboard'
import Team from './components/team/Team'



function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: './assets/images/raccoon.png'
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: './assets/images/squirrel.png'
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: './assets/images/bunny.png'
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: './assets/images/hound.png'
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
      <Scoreboard />
      <Team />
    </div>
  )
}


export default App;
