/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Ship from './Ship'

const Fleet = function (player) {
  this.player = player
  this.ships = []
  let shipsLocations = []
  this.addShip = (newship) => {
    this.ships.push(newship)
    shipsLocations = []
    this.ships.forEach(locateShips)
  }
  const locateShips = (ship, index, ships) => {
    let i = 0
    while (i !== ship.numberOfCompartments) {
      shipsLocations.push(ship.location[i])
      i++
    }
  }
  this.isFleetHit = (target) => {
    if (shipsLocations.includes(target)) {
      // console.log('FLEET WAS HIT ', true)
      return true
    } else {
      // console.log('FLEET WAS MISSED', false)
      return false
    }
  }
  this.removeSunkShip = () => {
    console.log('preremoval - ', this.ships)
    this.ships = this.ships.filter(ship => !ship.isSunk())
    console.log('postremoval - ', this.ships)
    return this.ships
  }
}

Fleet.PropTypes = {
  player: PropTypes.string.isRequired
}

export default Fleet
