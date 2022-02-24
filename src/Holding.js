import './Holding.css'
import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

function Holding ({ nextPlayer, reducer }) {
  const [, dispatch] = useReducer(reducer, nextPlayer)

  return (
    <div className='holdingScreen'>
      <button className='holdingButton' onClick={() => dispatch({ type: nextPlayer })}>Ready {nextPlayer}!</button>
    </div>
  )
}

Holding.propTypes = {
  nextPlayer: PropTypes.string.isRequired,
  reducer: PropTypes.func.isRequired
}

export default Holding
