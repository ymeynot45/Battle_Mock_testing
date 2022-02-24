import './Cell.css'
import React from 'react'
import PropTypes from 'prop-types'

const Cell = function (cellId) {
  this.cellId = cellId
  this.cellRow = cellId.slice(1)
  this.cellCol = cellId.slice(0, 1)
  return (
  <li key={cellId} id={cellId} className={'row' + this.cellRow + ' ' + 'boardCell'} > <button className='cellButton' variant="text"> {this.cellCol + this.cellRow}</button></li>
  ) // onClick={() => dispatch({ type: keyId })}
}

Cell.propTypes = {
  id: PropTypes.string.isRequired
}

export default Cell
