/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav.js' // , { nextPlayer }
import Ship, { HIT, DAMAGED, MISS, UNDAMAGED, ROWABC, COL123 } from './Ship.js'
import Board, { HEIGHT, WIDTH, PLAYERONE, PLAYERTWO } from './Board.js'
import Holding from './Holding.js'
import Button from './Button.js'
import Fleet from './Fleet.js'

const App = () => {
  const [activeTab, setActiveTab] = useState(PLAYERONE)
  const [nextPlayer, setNextPlayer] = useState(PLAYERTWO)
  // const endTurn = () => {
  //   const disableButtons = document.getElementsByClassName('cellButton')
  // console.log('disable buttons - ', disableButtons)
  // disableButtons.forEach.setAttribute('disabled', true)
  // console.log('ENDTURN ... ENDTURN')
  // }
  // const gameLogic = {}
  // gameLogic.endTurn = endTurn

  const reducerFireCheck = (button, action) => {
    switch (action.type) {
      case HIT:
        console.log('')
        return '' //
      case MISS:
        return '' //
    }
  }

  const [playerOneBoard, setplayerOneBoard] = useState(new Board(HEIGHT, WIDTH, PLAYERONE, reducerFireCheck)) // , gameLogic
  const [playerTwoBoard, setplayertwoBoard] = useState(new Board(HEIGHT, WIDTH, PLAYERTWO, reducerFireCheck)) // , gameLogic
  return (
    <div className='App-wrapper'>
      <header className='App-header'>
        Battleship
      </header>
      <Nav
        className='Nav-content'
      />
      <main className='App-content'>
        <Content tab={activeTab} nextPlayer={nextPlayer} setActiveTab={setActiveTab} setNextPlayer={setNextPlayer}
          playerOneBoard={playerOneBoard} playerTwoBoard={playerTwoBoard}/>
      </main>
    </div>
  )
}

const Content = ({ tab, nextPlayer, setActiveTab, setNextPlayer, playerOneBoard, playerTwoBoard }) => {
  const playerOneShips = new Fleet(PLAYERONE)
  playerOneShips.addShip(new Ship('sub', 3, PLAYERONE, 'G3', COL123))
  playerOneShips.addShip(new Ship('tug', 2, PLAYERONE, 'A1', ROWABC))
  const switchTabToHolding = () => {
    setActiveTab('holding')
  }
  const endTurnButton = new Button('endTurnButton', '', switchTabToHolding, 'End Turn')

  //playerOneBoard = playerOneBoard.renderBoard()
  //playerTwoBoard = playerTwoBoard.renderBoard()

  const reducerActivePlayer = (state, action) => {
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

  const gameOverCheck = (fleet) => {
    if (fleet.ships === []) {
      alert(fleet.player, ' has lost the game!')
    } else {
      return ''
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
      return <Holding nextPlayer={nextPlayer} reducer={reducerActivePlayer}/>
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
export { Content }
