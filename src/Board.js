import './Board.css'
const HEIGHT = 10
const WIDTH = 10

const Board = function (boardHeight, boardWidth) {
  const columHeaders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  this.boardHeight = boardHeight
  this.boardWidth = boardWidth

  const createBoard = (height, width) => {
    for (let i = 0; i < (boardHeight); i++){
        let 
          for (let i = 0; i < boardWidth; i++){
            <li id={}
          }
    }
  
  return (
    <div id='boardwrapper'>
      <ul id='squarewrapper'>
        {createBoard(boardHeight, boardWidth)}
      </ul>
    </div>
  )

}

export default Board
export { HEIGHT, WIDTH }
