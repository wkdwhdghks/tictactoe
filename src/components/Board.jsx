import Square from "./Square";
import "./Board.css";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [toggle, setToggle] = useState(false);

  const handleClick = (i) => {
    let newSquares = [...squares];
    if (toggle === false) {
      newSquares[i] = "X";
      setToggle(true);
    } else if (toggle === true) {
      newSquares[i] = "O";
      setToggle(false);
    }
    setSquares(newSquares);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">Next Player: X</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
