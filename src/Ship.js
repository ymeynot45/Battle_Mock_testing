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

  this.doesWork = function () { // remove later
    console.log('Yes this works.')
  }

  this.findLocation = function () {
    const col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const startingPoint = this.location
    const startNum = parseInt(startingPoint.substr(1, 1))
    const startLet = startingPoint.substr(0, 1)
    this.location = [startingPoint]
    if (this.orientation === 'row') {
      for (let i = 0; i < this.compartments; i++) {
        const newLet = col[(col.indexOf(startLet) + i)]
        this.location[i] = newLet + startNum
      }
    } else if (this.orientation === 'col') {
      for (let i = 0; i < this.compartments; i++) {
        this.location[i] = startLet + (startNum + i)
      }
    } else { alert('error in ship orientation') }
  }

  const damageShip = (targetLocation) => {
    console.log('This.location - ', this.location, ' - this.location.indexOf(targetLocation - ', this.location.indexOf(targetLocation))
    const hitCompartment = this.location.indexOf(targetLocation)
    console.log('this.body[hitCompartment] - ', this.body[hitCompartment])
    this.body[hitCompartment] = 'Damaged'
  }

  this.hitCheck = (targetLocation) => {
    if (this.location.includes(targetLocation)) {
      damageShip(targetLocation)
      console.log('Hit')
      return 'HIT'
    } else {
      console.log('Miss')
      return 'Miss'
    }
  }

  const fillCompartments = (ship) => {
    ship.body[(ship.compartments - 1)] = ''
    ship.body.fill('undamaged')
    return ship
  }

  console.log(this)
  fillCompartments(this)
  this.findLocation(this)
  return this
}
export default Ship
