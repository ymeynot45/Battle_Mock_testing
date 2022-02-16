import './App.css'
import React from 'react'
import Nav from './Nav.js'
import Shipbuilder from './Ship.js'

const App = () => {
  return (
    <div className='App-wrapper'>
      <header className='App-header'>
        Battleship
      </header>
      <Nav></Nav>
      <main className='App-content'>
        <Content/>
      </main>
    </div>
  )
}

const Content = () => {
  const temp = new Shipbuilder()
  console.log(temp)
}

export default App
