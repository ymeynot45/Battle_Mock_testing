/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import Nav from './Nav.js'
import Ship from './Ship.js'
import Board, { HEIGHT, WIDTH } from './Board.js'

const App = () => {
  const newBoard = new Board(HEIGHT, WIDTH)
  console.log(newBoard)
  // const battleShip = new Ship('Battleship', 5, 'playerone')
  // const airCraftCarrier = new Ship('AirCraftCarrier', 5, 'playerone')
  return (
    <div className='App-wrapper'>
      <header className='App-header'>
        Battleship
      </header>
      <Nav/>
      <main className='App-content'>
        <div id='boardwrapper'>
          <ul id='squarewrapper'>
            {newBoard.createBoard(newBoard.boardHeight, newBoard.boardWidth)}
          </ul>
        </div>
      </main>
    </div>
  )
}

// const Content = () => {
//   const temp = new Ship()
//   return <p>{temp}</p>
// }

export default App
