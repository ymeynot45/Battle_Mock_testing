/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './Nav.css'
import { PLAYERONE, PLAYERTWO } from './Board'

const Nav = ({ activeTab }) => {
  const activePlayer = tabName =>
  `App-nav-tab ${
    activeTab === tabName ? 'selected' : ''
  }`

  return (
    <nav className="App-nav">
      <ul>
        <li className={activePlayer(PLAYERONE)}>
          1st Player
        </li>
        <li className={activePlayer('holding')}>
          Waiting
        </li>
        <li className={activePlayer(PLAYERTWO)}>
          2nd Player
        </li>
      </ul>
    </nav>
  )
}
Nav.propTypes = {
  activeTab: PropTypes.string
}

export default Nav
