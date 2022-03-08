/* eslint-disable no-unused-vars */
import './Cell.css'
import React, { Component, useReducer } from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'

const Cell = function (cellId, player, hitCheck, reducer, updateCell) {
  this.player = player
  this.text = cellId
  this.cellId = (player + cellId)
  this.cellRow = cellId.slice(1)
  this.cellCol = cellId.slice(0, 1)
  this.hitCheck = hitCheck
  this.className = ('row' + this.cellRow + ' ' + 'boardCell')
  const buttonId = (this.cellId + 'Button')
  // const [, dispatch] = useReducer(reducer, updateCell)

  const clickEffect = (e) => {
    // e.currentTarget.setAttribute('disabled', true)
    // dispatch({ type: this.id })
    document.getElementById(this.cellId + 'Button').remove()
    // endTurn()
  }
  this.cellButton = (new Button(buttonId, 'cellButton', clickEffect, this.text, ('row' + this.cellRow)))

  return (
    <li key={this.cellId} id={this.cellId} className={this.className}>{this.cellButton}</li>
  ) //
}

Cell.propTypes = {
  cellId: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  hitCheck: PropTypes.func.isRequired
}

export default Cell
