/* eslint-disable no-unused-vars */

const UNDAMAGED = 'undamaged'
const DAMAGED = 'damaged'
const HIT = 'hit'
const MISS = 'miss'
const ROWABC = 'row'
const COL123 = 'col'

const Ship = function (shipType, shipLength, player, shipLocation, shipOrientation) {
  this.type = shipType
  this.player = player
  this.numberOfCompartments = shipLength
  this.body = []
  this.orientation = shipOrientation
  this.location = shipLocation

  this.isSunk = () => {
    return !this.body.includes(UNDAMAGED)
  }

  this.findLocation = function () {
    const col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const startingPoint = this.location
    const startNum = parseInt(startingPoint.substr(1, 1))
    const startLet = startingPoint.substr(0, 1)
    this.location = [startingPoint]
    if (this.orientation === ROWABC) {
      for (let i = 0; i < this.numberOfCompartments; i++) {
        const newLet = col[(col.indexOf(startLet) + i)]
        this.location[i] = newLet + startNum
      }
    } else if (this.orientation === COL123) {
      for (let i = 0; i < this.numberOfCompartments; i++) {
        this.location[i] = startLet + (startNum + i)
      }
    } else { alert('error in ship orientation') }
  }

  const damageShip = (targetLocation) => {
    const hitCompartment = this.location.indexOf(targetLocation)
    this.body[hitCompartment] = DAMAGED
  }

  this.shipHitCheck = (targetLocation) => {
    if (this.location.includes(targetLocation)) {
      damageShip(targetLocation)
      // this.isSunk()
      // console.log('hit ship - ', this)
      return HIT
    } else {
      // console.log('missed ship - ', this)
      return MISS
    }
  }

  const fillCompartments = (ship) => {
    ship.body[(ship.numberOfCompartments - 1)] = '' // CREATES THE PROPER LENGTH ARRAY
    ship.body.fill(UNDAMAGED) // FILLS THE ARRAY, fill() won't expand an array.
    return ship
  }

  // console.log(this)
  fillCompartments(this)
  this.findLocation(this)
  return this
}
export default Ship
export { HIT, DAMAGED, MISS, UNDAMAGED }
