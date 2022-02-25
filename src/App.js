/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav.js'
import Ship from './Ship.js'
import Board, { HEIGHT, WIDTH, PLAYERONE, PLAYERTWO } from './Board.js'
import Holding from './Holding.js'

const App = () => {
  const [activeTab, setActiveTab] = useState(PLAYERONE)
  const nextPlayer = PLAYERTWO

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
        <Content tab={activeTab} nextPlayer={nextPlayer}/>
        {console.log(activeTab)}
      </main>
    </div>
  )
}

const Content = ({ tab, nextPlayer }) => {
  console.log(PLAYERONE)
  let playerOneBoard = new Board(HEIGHT, WIDTH, PLAYERONE)
  let playerTwoBoard = new Board(HEIGHT, WIDTH, PLAYERTWO)
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
        </div>
      )
    case PLAYERTWO:
      return (
        <div id='boardWrapper'>
          {playerTwoBoard}
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
  nextPlayer: PropTypes.string.isRequired
}

export default App
