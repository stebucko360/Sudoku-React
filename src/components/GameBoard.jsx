import React from 'react'

export const GameBoard = ({gameBoard, setSelected}) => {
    
    const handleSelected = (event, index1, index2)=>{
        if (event.target.className === 'grid') {
            event.target.className = 'selected'
            setSelected([index1, index2])
        } else {
            event.target.className = 'grid'
        }
    }
  return (
      <div className='gameBoardContainer'>
    <div className='gameBoard'>
        {gameBoard.map((row, index1)=>{
            return row.map((arrayValue, index2)=>{
                if (arrayValue === 'border') {
                    return <div className='border' ></div>
                }  else if (arrayValue === 'selected') {
                    return <div className='selected'></div>
                } else {
                    return <div className='grid' onClick={(event)=>{handleSelected(event, index1, index2)}}>{arrayValue === 0 ? null : arrayValue}</div>
                }
            })
        })}
    </div>
      </div>
  )
}
