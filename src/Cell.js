import './Cell.css'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'

const Cell = function (cellId, player, hitCheck) {
  this.player = player
  this.text = cellId
  this.cellId = (player + cellId)
  this.cellRow = cellId.slice(1)
  this.cellCol = cellId.slice(0, 1)
  this.hitCheck = hitCheck
  this.className = ('row' + this.cellRow + ' ' + 'boardCell')

  const clickEffect = (e) => {
    e.currentTarget.setAttribute('disabled', true)
    // this.removeChild(this.firstChild)
    // endTurn()
  }
  this.cellButton = (new Button(this.cellId, ('row' + this.cellRow), clickEffect, this.text, 'cellButton'))

  return (
    <li key={cellId} id={cellId} className={this.className}>{this.cellButton}</li>
  ) //
}

Cell.propTypes = {
  cellId: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  hitCheck: PropTypes.func.isRequired
}

export default Cell
