// const Shipbuilder = () => {
//   'temp text'
// }

const Ship = function (type, length, player) {
  this.type = type
  this.player = player
  this.compartments = length
  this.isFloating = true
  this.body = []

  // const isSunk = () => {
  //   let sum = 0
  //   for (let i = 0; i < body.length; i++) {
  //     sum += body[i]
  //   }
  //   if (sum === compartments) {
  //     isFloating = false
  //   }
  // }

  // const hitCheck = (location) => {

  // }
  return this
}
export default Ship
