import './Holding.css'
import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

function Holding ({ nextPlayer }) {
  const [, dispatch] = useReducer()

  return (
    <div className='holdingScreen'>
      <button className='holdingButton' onClick={() => dispatch({ type: nextPlayer })}>Ready {nextPlayer}!</button>
    </div>
  )
}

Holding.propTypes = {
  nextPlayer: PropTypes.string.isRequired
}

export default Holding
