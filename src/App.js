/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav.js' // , { nextPlayer }
import Ship from './Ship.js'
import Board, { HEIGHT, WIDTH, PLAYERONE, PLAYERTWO } from './Board.js'
import Holding from './Holding.js'
import Button from './Button.js'

const App = () => {
  const [activeTab, setActiveTab] = useState(PLAYERONE)
  const nextPlayer = PLAYERTWO
  const [playerOneBoard, setplayerOneBoard] = useState(new Board(HEIGHT, WIDTH, PLAYERONE))
  const [playerTwoBoard, setplayertwoBoard] = useState(new Board(HEIGHT, WIDTH, PLAYERTWO))
  return (
    <div className='App-wrapper'>
      <header className='App-header'>
        Battleship
      </header>
      <Nav
        className='Nav-content'
        activeTab={activeTab}
        onTabChange={setActiveTab}
        nextPlayer={nextPlayer}
/>
      <main className='App-content'>
        <Content tab={activeTab} nextPlayer={nextPlayer}
          playerOneBoard={playerOneBoard} playerTwoBoard={playerTwoBoard}/>
        {console.log(activeTab)}
      </main>
    </div>
  )
}

const Content = ({ tab, nextPlayer, playerOneBoard, playerTwoBoard }) => {
  const switchTabEffectHolding = (nextPlayer) => {
    // onTabChange('holding')
    // console.log(activeTab)
    // changePlayer(nextPlayer)
  }
  const endTurnButton = new Button('endTurnButton', '', switchTabEffectHolding, 'End Turn') // nextPlayer
  console.log(nextPlayer)
  playerOneBoard = playerOneBoard.renderBoard()
  playerTwoBoard = playerTwoBoard.renderBoard()

  const reducer = (state, action) => {
    switch (action.type) {
      case PLAYERONE:
        nextPlayer = PLAYERTWO
        // activeTab = PLAYERONE 'not in scope'
        return state
      case PLAYERTWO:
        nextPlayer = PLAYERONE
        // activeTab = PLAYERTWO
        return state
    }
  }

  switch (tab) {
    case PLAYERONE:
      return (
        <div id='boardWrapper'>
          {playerOneBoard}
          <div>{endTurnButton}</div>
        </div>
      )
    case PLAYERTWO:
      return (
        <div id='boardWrapper'>
          {playerTwoBoard}
          <div>{endTurnButton}</div>
        </div>
      )
    case 'holding':
      return <Holding nextPlayer={nextPlayer} reducer={reducer}/>
    case 'winner':
      return <div>Winner</div>
    default:
      throw new Error()
  }
}

Content.propTypes = {
  tab: PropTypes.string.isRequired,
  nextPlayer: PropTypes.string.isRequired,
  playerOneBoard: PropTypes.object.isRequired,
  playerTwoBoard: PropTypes.object.isRequired
}

export default App
