import React, {useState, useEffect} from 'react';
import Box from './Box';


const initalValue = ["", "", "", "", "", "", "", "", "",];

const Board = () => {
    const [boardState, updateBoardState] = useState(initalValue);
    const [boardValue, updateBoardValue] = useState(true);
    const [gameEnd, setGameEnd] = useState(false);
    const [winner, setWinner] = useState("");
  
    useEffect(() => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < lines.length; i++) {
        if (
          boardState[lines[i][0]] &&
          boardState[lines[i][0]] === boardState[lines[i][1]] &&
          boardState[lines[i][0]] === boardState[lines[i][2]]
        ) {
          setWinner(boardState[lines[i][0]]);
          setGameEnd(true);
        }
      }
    }, [boardState]);
  
    const handelClick = (idx) => {
      if (gameEnd) {
        return;
      }
  
      const newArr = Array.from(boardState);
  
      if (newArr[idx]) {
        alert("click empty cell");
        console.log("already clicked");
        return;
      }
  
      newArr[idx] = boardValue ? "X" : "O";
      updateBoardState(newArr);
      updateBoardValue(!boardValue);
    };

    return (
        <div className='board'>
         <div className='board-box'>
        <Box value={boardState[0]} onClick={() => handelClick(0)} />
        <Box value={boardState[1]} onClick={() => handelClick(1)} />
        <Box value={boardState[2]} onClick={() => handelClick(2)} />
      </div>
      <div className='board-box'>
        <Box value={boardState[3]} onClick={() => handelClick(3)} />
        <Box value={boardState[4]} onClick={() => handelClick(4)} />
        <Box value={boardState[5]} onClick={() => handelClick(5)} />
      </div>
      <div className='board-box'>
        <Box value={boardState[6]} onClick={() => handelClick(6)} />
        <Box value={boardState[7]} onClick={() => handelClick(7)} />
        <Box value={boardState[8]} onClick={() => handelClick(8)} />
      </div>

      <button className='boardbtn'
        onClick={() => {
          updateBoardState(initalValue);
          setGameEnd(false);
          updateBoardValue(true);
        }}
      >
        RESET
      </button>

      <div className='result'>
        {gameEnd ? <span>{winner} is the winner</span> : <></>}
      </div>
        </div>
    )
}

export default Board;
