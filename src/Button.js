/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const Button = function (buttonId, className, clickEffect, buttonText, passedVariable) {
  this.buttonId = buttonId
  this.className = (className + ' ' + 'cellButton')
  this.clickEffect = clickEffect
  this.buttonText = buttonText
  this.passedVariable = passedVariable
  // const [activated, setActivated] = React.useState(false) // I'm not sure if this is required
  return (
    <button
      id={this.buttonId}
      className={this.className}
      // aria-pressed={activated ? 'true' : 'false'}
      onClick={(e) =>
        this.clickEffect(e)
        // setActivated(!activated)
        }>
      {this.buttonText}
    </button>
  )
}

Button.PropTypes = {
  buttonId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clickEffect: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default Button
