import Square from "./Square";
import "./Board.css";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [toggle, setToggle] = useState(true);

  const status = `Next player ${toggle ? "X" : "O"}`;

  const handleClick = (i) => {
    let newSquares = [...squares];
    newSquares[i] = toggle ? "X" : "O";
    setSquares(newSquares);
    setToggle((prev) => !prev);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">{status}</div>
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
