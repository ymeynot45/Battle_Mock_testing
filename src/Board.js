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
        boardStructure.push(<li key={keyId} id={keyId} className={['row' + currentRow, 'boardCell']} > {columHeaders[l] + currentRow}</li>)
        // console.log(boardStructure)
      }
    }
  }

  this.renderBoard = function () {
    return <ul id='squareWrapper'>
      {boardStructure}
    </ul>
    // boardStructure.forEach(e => e.render())
  }

  // this.createBoard = function (height, width) {
  //   return (
  //     <div>
  //       {for (let n = 0; n < height; n++)
  //         {const currentRow = height[n]
  //           for (let l = 0; l < width; l++) {
  //             <li id={columHeaders[l] + currentRow} className={['row' + currentRow, 'boardCell']} > {columHeaders[l] + currentRow}</li>
  //           }
  //         }
  //       }
  //     </div>
  //   )
  // }

  buildBoard(boardHeight, boardWidth)
  console.log(boardStructure)
  console.log('I RAN TODAY')
}

export default Board
export { HEIGHT, WIDTH }
