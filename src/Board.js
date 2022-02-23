import React from 'react'
import './Board.css'
const HEIGHT = 10
const WIDTH = 10
const PLAYERONE = 'playerOne'
const PLAYERTWO = 'playerTwo'

const Board = function (boardHeight, boardWidth, player) {
  const columHeaders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  this.boardHeight = boardHeight
  this.boardWidth = boardWidth
  this.player = player
  const boardStructure = []
  const buildBoard = function (height, width) {
    for (let n = 1; n <= height; n++) {
      const currentRow = (n)
      for (let l = 0; l < width; l++) {
        const keyId = columHeaders[l] + currentRow
        boardStructure.push(<li key={keyId} id={keyId} className={'row' + currentRow + ' ' + 'boardCell'} > <button className='cellButton' variant="text"> {columHeaders[l] + currentRow}</button></li>) // onClick={() => dispatch({ type: keyId })}
      }
    }
  }

  this.renderBoard = function () {
    return <ul id='squareWrapper'>
      {boardStructure}
    </ul>
  }

  buildBoard(boardHeight, boardWidth)
}

export default Board
export { HEIGHT, WIDTH, PLAYERONE, PLAYERTWO }
