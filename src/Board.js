import React from 'react'
import './Board.css'
const HEIGHT = 10
const WIDTH = 10

const Board = function (boardHeight, boardWidth) {
  const columHeaders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  this.boardHeight = boardHeight
  this.boardWidth = boardWidth
  const boardStructure = []
  const buildBoard = function (height, width) {
    for (let n = 1; n <= height; n++) {
      const currentRow = (n)
      console.log(currentRow)
      for (let l = 0; l < width; l++) {
        const keyId = columHeaders[l] + currentRow
        boardStructure.push(<li key={keyId} id={keyId} className={'row' + currentRow + ' ' + 'boardCell'} > <button className='cellButton' onClick={() => dispatch({ type: keyId })} variant="text"> {columHeaders[l] + currentRow}</button></li>)
      }
    }
  }

  this.renderBoard = function () {
    return <ul id='squareWrapper'>
      {boardStructure}
    </ul>
  }

  buildBoard(boardHeight, boardWidth)
  console.log(boardStructure)
  console.log('I RAN TODAY')
}

export default Board
export { HEIGHT, WIDTH }
