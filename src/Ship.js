/* eslint-disable no-unused-vars */

// const Shipbuilder = () => {
//   'temp text'
// }

const Ship = function (type, length, player, location, orientation) {
  this.type = type
  this.player = player
  this.compartments = length
  this.isFloating = true
  this.body = []
  this.orientation = orientation
  this.location = location

  this.isSunk = () => {
    if (!this.body.includes('undamaged')) {
      console.log('YOU SUNK MY BATTLESHIP')
      this.isFloating = false
    }
  }

  this.doesWork = function () {
    console.log('Yes this works.')
  }

  const fillCompartments = (ship) => {
    ship.body[(ship.compartments - 1)] = ''
    ship.body.fill('undamaged')
    return ship
  }

  const damageShip = (ship, location) => {

  }

  const hitCheck = (ship, location) => {
    if (ship.location.includes(location)) {
      damageShip(ship, location)
    } else return 'Miss'
  }
  console.log(this)
  fillCompartments(this)
  return this
}
export default Ship
