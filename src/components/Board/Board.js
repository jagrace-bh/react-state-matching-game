import React from 'react'
import './Board.css';
import Tile from "../Tile";

const Board = (props) => {

  const tilesMap = props.tiles.map((tile) => {
    return (<Tile {...tile} />)
  })

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {tilesMap}
    </div>
  )
}

export default Board
