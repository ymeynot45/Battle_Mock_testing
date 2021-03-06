import React, { } from 'react'
import './Board.css'
import Cell from './Cell.js'
const HEIGHT = 10
const WIDTH = 10
const PLAYERONE = 'playerOne'
const PLAYERTWO = 'playerTwo'

const Board = function (boardHeight, boardWidth, player, gameLogic) {
  const columHeaders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  this.boardHeight = boardHeight
  this.boardWidth = boardWidth
  this.player = player
  const boardStructure = []
  this.gameLogic = gameLogic
  const buildBoard = function (height, width, player, gameLogic) {
    for (let n = 1; n <= height; n++) {
      const currentRow = (n)
      for (let l = 0; l < width; l++) {
        const keyId = columHeaders[l] + currentRow
        boardStructure.push(new Cell(keyId, player, gameLogic))
      }
    }
  }
  buildBoard(this.boardHeight, this.boardWidth, this.player, this.gameLogic)
 //this.renderBoard = function () {
    return (
      <div className='playerDisplay'> {this.player}
        <ul id={(this.player + 'squareWrapper')} className='squareWrapper'>
          {boardStructure}
        </ul>
      </div>
    )
  //}
}

export default Board
export { HEIGHT, WIDTH, PLAYERONE, PLAYERTWO }
