/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav.js'
import Ship from './Ship.js'
import Board, { HEIGHT, WIDTH } from './Board.js'

const App = () => {
  const newBoard = new Board(HEIGHT, WIDTH)
  const [activeTab, setActiveTab] = useState('playerOne')

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
        <Content tab={activeTab}/>
        {/* <div id='boardWrapper'>
            {newBoard.renderBoard()}
        </div> */}
      </main>
    </div>
  )
}

const Content = ({ tab }) => {
  switch (tab) {
    case 'playerOne':
      return ''
    case 'playerTwo':
      return ''
    case 'holding':
      return ''
    case 'winner':
      return ''
    default:
  }
}

Content.propTypes = {
  tab: PropTypes.string.isRequired
}

export default App
