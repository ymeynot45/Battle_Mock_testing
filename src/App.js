import './App.css'
import React from 'react'
import Nav from './Nav.js'
import Ship from './Ship.js'

const App = () => {
  const sub = new Ship('sub', 6, 'playerone')
  return (
    <div className='App-wrapper'>
      <header className='App-header'>
        Battleship
      </header>
      <Nav/>
      <main className='App-content'>
        <div>{sub.type}</div>
      </main>
    </div>
  )
}

// const Content = () => {
//   const temp = new Ship()
//   return <p>{temp}</p>
// }

export default App
