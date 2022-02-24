/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav.js'
import Ship from './Ship.js'
import Board, { HEIGHT, WIDTH, PLAYERONE, PLAYERTWO } from './Board.js'
import Holding from './Holding.js'

const App = () => {
  const newBoard = new Board(HEIGHT, WIDTH)
  const [activeTab, setActiveTab] = useState(PLAYERONE)
  const nextPlayer = PLAYERTWO

  return (
    <div className='App-wrapper'>
      <header className='App-header'>
        Battleship
      </header>
      <Nav
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
  const playerOneBoard = new Board(HEIGHT, WIDTH, PLAYERONE)
  const playerTwoBoard = new Board(HEIGHT, WIDTH, PLAYERTWO)

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
    case 'playerOne':
      return (
        <div id='boardWrapper'>
          {playerOneBoard.renderBoard()}
        </div>
      )
    case 'playerTwo':
      return (
        <div id='boardWrapper'>
          {playerTwoBoard.renderBoard()}
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
