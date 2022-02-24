import './Cell.css'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'

const Cell = function (cellId) {
  this.cellId = cellId
  this.cellRow = cellId.slice(1)
  this.cellCol = cellId.slice(0, 1)
  this.className = ('row' + this.cellRow + ' ' + 'boardCell')
  this.cellButton = (new Button(this.cellId, ('row' + this.cellRow)))
  // const clickEffect = function (e) {
  //   const [, dispatch] = useReducer(reducer)
  //   dispatch({ type: this.cellId }
  //   e.currentTarget.setAttribute('disabled', true)
  // }

  return (
  <li key={cellId} id={cellId} className={this.className}>{this.cellButton}</li>
  ) //
}

Cell.propTypes = {
  id: PropTypes.string.isRequired
}

export default Cell
