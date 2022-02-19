import React from 'react'
import './Board.css'
const HEIGHT = 10
const WIDTH = 10

const Board = function (boardHeight, boardWidth) {
  const columHeaders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  this.boardHeight = boardHeight
  this.boardWidth = boardWidth

  this.createBoard = (height, width) => {
    return (
      <div>
        {for (let n = 0; n < (boardHeight); n++) 
        {const currentRow = boardHeight[n]
          for (let l = 0; l < boardWidth; l++) {
            <li id={columHeaders[l] + currentRow} className={['row' + currentRow, 'boardCell']} > {columHeaders[l] + currentRow}</li>
          }
          }
        }
      </div>
    )
  }
  console.log('I RAN TODAY')
}

export default Board
export { HEIGHT, WIDTH }
