import './Cell.css'
import React from 'react'
import PropTypes from 'prop-types'

const Cell = function (cellId) {
  this.cellId = cellId
  this.cellRow = cellId.slice(1)
  this.cellCol = cellId.slice(0, 1)
  const clickEffect = function (e) {
    // const [, dispatch] = useReducer(reducer)
    // dispatch({ type: this.cellId }
    e.currentTarget.setAttribute('disabled', true)
  }

  return (
  <li key={cellId} id={cellId} className={'row' + this.cellRow + ' ' + 'boardCell'} > <button className='cellButton' variant="text" onClick={(e) => clickEffect(e)}> {this.cellCol + this.cellRow}</button></li>
  ) //
}

Cell.propTypes = {
  id: PropTypes.string.isRequired
}

export default Cell
