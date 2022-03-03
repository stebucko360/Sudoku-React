import React from 'react'

export const NumberButtons = ({setGameBoard, selected}) => {
    const numbers = [1,2,3,4,5,6,7,8,9];

    const insertNumber = (number) =>{
        setGameBoard((currentBoard)=>{
            let boardCopy = currentBoard.map((value, index1)=>{
                return value.map((value2, index2)=>{
                    if (index1 === selected[0] && index2 === selected[1]){
                        return number
                    } else return value2
                })});
            return boardCopy;
        })
    }

  return (
    <div>
        {numbers.map((number)=>{
            return <button className='numberButton' onClick={()=>{insertNumber(number)}}>{number}</button>
        })}
    </div>
  )
}
