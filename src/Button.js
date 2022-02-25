/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const Button = function (buttonId, className, clickEffect, buttonText, passedVariable) {
  this.buttonId = buttonId
  this.className = (className + ' ' + passedVariable)
  this.clickEffect = clickEffect
  this.buttonText = buttonText
  this.passedVariable = passedVariable
  return (
    <button
      id={this.buttonId}
      className={this.className}
      onClick={(e) => {
        this.clickEffect(e)
      }
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
