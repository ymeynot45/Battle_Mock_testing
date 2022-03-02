/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './Nav.css'
import { PLAYERONE, PLAYERTWO } from './Board'
// const nextPlayer = PLAYERTWO

const Nav = ({ activeTab }) => { // nextPlayerImport <-- for the third var
  // const nextPlayer = nextPlayerImport
  const activePlayer = tabName =>
  `App-nav-tab ${
    activeTab === tabName ? 'selected' : ''
  }`

  return ( // Later remove the buttons so only the app changes the tabs
    <nav className="App-nav">
      <ul>
        <li className={activePlayer('playerOne')}>
          1st Player
        </li>
        <li className={activePlayer('holding')}>
          Waiting
        </li>
        <li className={activePlayer('playerTwo')}>
          2nd Player
        </li>
      </ul>
    </nav>
  )
}
Nav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
  // nextPlayerImport: PropTypes.string.isRequired
}

export default Nav
// export { nextPlayer }
