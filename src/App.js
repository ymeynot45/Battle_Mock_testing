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
  const [nextPlayer, setNextPlayer] = useState(PLAYERTWO)
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
/>
      <main className='App-content'>
        <Content tab={activeTab} nextPlayer={nextPlayer} setActiveTab={setActiveTab} setNextPlayer={setNextPlayer}
          playerOneBoard={playerOneBoard} playerTwoBoard={playerTwoBoard}/>
        {console.log(activeTab)}
      </main>
    </div>
  )
}

const Content = ({ tab, nextPlayer, setActiveTab, setNextPlayer, playerOneBoard, playerTwoBoard }) => {
  const switchTabToHolding = () => {
    setActiveTab('holding')
  }
  const endTurnButton = new Button('endTurnButton', '', switchTabToHolding, 'End Turn')
  playerOneBoard = playerOneBoard.renderBoard()
  playerTwoBoard = playerTwoBoard.renderBoard()

  const reducer = (state, action) => {
    switch (action.type) {
      case PLAYERONE:
        setNextPlayer(PLAYERTWO)
        setActiveTab(PLAYERONE)
        return
      case PLAYERTWO:
        setNextPlayer(PLAYERONE)
        setActiveTab(PLAYERTWO)
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
  setActiveTab: PropTypes.func.isRequired,
  setNextPlayer: PropTypes.func.isRequired,
  playerOneBoard: PropTypes.object.isRequired,
  playerTwoBoard: PropTypes.object.isRequired
}

export default App
