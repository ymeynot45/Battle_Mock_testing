import React from 'react'
import PropTypes from 'prop-types'
import './Nav.css'

const Nav = ({ activeTab, onTabChange }) => {
  const activePlayer = tabName =>
  `App-nav-tab ${
    activeTab === tabName ? 'selected' : ''
  }`

  return ( // Later remove the buttons so only the app changes the tabs
    <nav className="App-nav">
      <ul>
        <li className={activePlayer('playerOne')}>
          <button onClick={() => onTabChange('playerOne')}>
            1st Player
          </button>
        </li>
        <li className={activePlayer('holding')}>
          <button onClick={() => onTabChange('holding')}>
            Waiting
          </button>
        </li>
        <li className={activePlayer('playerTwo')}>
          <button onClick={() => onTabChange('playerTwo')}>
            2nd Player
          </button>
        </li>
      </ul>
    </nav>
  )
}
Nav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
}

export default Nav
