/* eslint-disable no-unused-vars */

const UNDAMAGED = 'undamaged'
const DAMAGED = 'damaged'
const HIT = 'hit'
const MISS = 'miss'
const ROW = 'row'
const COL = 'col'

const Ship = function (type, length, player, location, orientation) {
  this.type = type
  this.player = player
  this.compartments = length
  this.body = []
  this.orientation = orientation
  this.location = location

  this.isSunk = () => {
    return !this.body.includes(UNDAMAGED)
  }

  this.findLocation = function () {
    const col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    const startingPoint = this.location
    const startNum = parseInt(startingPoint.substr(1, 1))
    const startLet = startingPoint.substr(0, 1)
    this.location = [startingPoint]
    if (this.orientation === ROW) {
      for (let i = 0; i < this.compartments; i++) {
        const newLet = col[(col.indexOf(startLet) + i)]
        this.location[i] = newLet + startNum
      }
    } else if (this.orientation === COL) {
      for (let i = 0; i < this.compartments; i++) {
        this.location[i] = startLet + (startNum + i)
      }
    } else { alert('error in ship orientation') }
  }

  const damageShip = (targetLocation) => {
    const hitCompartment = this.location.indexOf(targetLocation)
    this.body[hitCompartment] = DAMAGED
  }

  this.hitCheck = (targetLocation) => {
    if (this.location.includes(targetLocation)) {
      damageShip(targetLocation)
      console.log(HIT)
      return HIT
    } else {
      console.log(MISS)
      return MISS
    }
  }

  const fillCompartments = (ship) => {
    ship.body[(ship.compartments - 1)] = '' // CREATES THE PROPER LENGTH ARRAY
    ship.body.fill(UNDAMAGED) // FILLS THE ARRAY, fill won't expand an array.
    return ship
  }

  console.log(this)
  fillCompartments(this)
  this.findLocation(this)
  return this
}
export default Ship
export { HIT, DAMAGED, MISS, UNDAMAGED }
