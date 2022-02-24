/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const Button = function (buttonId, className) {
  this.buttonId = buttonId
  this.className = (className + ' ' + 'cellButton')
  console.log(this.className)
  const [activated, setActivated] = React.useState(false)
  return (
    <button
      className={this.className}
      aria-pressed={activated ? 'true' : 'false'}
      onClick={(e) =>
        // setActivated(!activated)
        e.currentTarget.setAttribute('disabled', true)
        }>
      {this.buttonId}
    </button>
  )
}

Button.PropTypes = {
  buttonId: PropTypes.string.isRequired
}

export default Button
