import './Cell.css'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'

const Cell = function (cellId, player) {
  this.player = player
  this.text = cellId
  this.cellId = (player + cellId)
  this.cellRow = cellId.slice(1)
  this.cellCol = cellId.slice(0, 1)
  this.className = ('row' + this.cellRow + ' ' + 'boardCell')
  // const hitCheck = true

  const clickEffect = (e) => {
    e.currentTarget.setAttribute('disabled', true)
    console.log(e.target, this)
    // hitCheck() ? 'turn red' : 'do nothing'
    // endTurn()
  }
  this.cellButton = (new Button(this.cellId, ('row' + this.cellRow), clickEffect, this.text, 'cellButton'))

  return (
    <li key={cellId} id={cellId} className={this.className}>{this.cellButton}</li>
  ) //
}

Cell.propTypes = {
  cellId: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired
}

export default Cell
