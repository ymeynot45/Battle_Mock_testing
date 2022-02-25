/* eslint-disable no-unused-vars */
import './Holding.css'
import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Holding ({ nextPlayer, reducer }) {
  const [, dispatch] = useReducer(reducer, nextPlayer)
  const buttonText = nextPlayer + '\'s turn!'
  const clickEffect = ''// dispatch({ type: nextPlayer })
  const waitButton = new Button('holdingButton', 'genButton', clickEffect, buttonText)

  return (
    <div className='holdingScreen'>
      {waitButton}
    </div>
  )
}

Holding.propTypes = {
  nextPlayer: PropTypes.string.isRequired,
  reducer: PropTypes.func.isRequired
}

export default Holding
