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
  // { <div id='boardWrapper'>
  //   {newBoard.renderBoard()}
  // </div> }
  const playerOneBoard = new Board(HEIGHT, WIDTH, PLAYERONE)
  const playerTwoBoard = new Board(HEIGHT, WIDTH, PLAYERTWO)

  switch (tab) {
    case 'playerOne':
      return ''
    case 'playerTwo':
      return ''
    case 'holding':
      return <Holding nextPlayer={nextPlayer}/>
    case 'winner':
      return ''
    default:
  }
}

Content.propTypes = {
  tab: PropTypes.string.isRequired,
  nextPlayer: PropTypes.string.isRequired
}

export default App
