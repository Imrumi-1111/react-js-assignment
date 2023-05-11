import styles from './board.module.css'
import React, { useState } from 'react';
import Square from './square';

const Board = ({ player1, player2 }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(player1);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    const newSquares = [...squares];
    if (winner || newSquares[i]) return;
    newSquares[i] = player;
    setSquares(newSquares);
    setPlayer(player === player1 ? player2 : player1);
  };

  const calculateWinner = () => {
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
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  React.useEffect(() => {
    setWinner(calculateWinner());
  }, [squares]);

  

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setPlayer(player1);
    setWinner(null);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${player}`;
  }

  return (
    <div>
      <div className={styles.Board}>{status}
      
        <div className={styles.board}>
          <Square onClick={() => handleClick(0)} value={squares[0]}/>
          <Square onClick={() => handleClick(1)} value={squares[1]}/>
          <Square onClick={() => handleClick(2)} value={squares[2]}/>
        </div>
        <div className={styles.board}>
        <Square onClick={() => handleClick(3)} value={squares[3]}/>
        <Square onClick={() => handleClick(4)} value={squares[4]}/>
        <Square onClick={() => handleClick(5)} value={squares[5]}/>
        </div>
        <div className={styles.board}>
        <Square onClick={() => handleClick(6)} value={squares[6]}/>
        <Square onClick={() => handleClick(7)} value={squares[7]}/>
        <Square onClick={() => handleClick(8)} value={squares[8]}/>
        </div>
      </div>
      {winner && (
        <button className={styles.start} onClick={resetGame}>
          Start Again
        </button>
      )}
    </div>
  );
};

export default Board;
