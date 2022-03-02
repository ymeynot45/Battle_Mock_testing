import React, { useState } from "react"
import PropTypes from 'prop-types'
import Ship from './Ship'

const Fleet = function (player) {
  this.player = player
  this.ships = []
  const shipsLocations = []
  this.addShip = (newship) => {
    this.ships.push(newship)
  }
  const locateShips = (ship, index, ships) => {
    let i = 0
    while (i !== ship.numberOfCompartments) {
      shipsLocations.push(ship.location[i])
      i++
    }
  }
  this.fleetHitCheck = (target) => {
    if (shipsLocations.includes(target)) {
      return true
    } else return false
  }
  this.ships.forEach(locateShips)
}

Fleet.PropTypes = {
  player: PropTypes.string.isRequired
}

export default Fleet
