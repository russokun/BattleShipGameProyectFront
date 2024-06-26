import React, { useState } from 'react';
import Cell from './Cell';
import '../styles/board.css';

const ShootBoard = () => {
  const [shots, setShots] = useState([]);
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']; // Array de letras para las filas

  const handleCellClick = (row, col) => {
    setShots([...shots, { row, col }]);
  };

  const isCellShot = (row, col) => {
    return shots.some(shot => shot.row === row && shot.col === col);
  };

  const renderBoard = () => {
    let board = [];

    // Agregar fila de números en la parte superior
    let numberHeader = [<div key="corner" className="cell no-border"></div>]; // Celda esquina sin borde
    for (let i = 1; i <= 10; i++) {
    numberHeader.push(<div key={`num-${i}`} className="cell number no-border">{i}</div>);
    }
    board.push(<div key="number-header" className="board-row">{numberHeader}</div>);

  // Cuando agregas la celda de letra al inicio de cada fila
  for (let row = 0; row < 10; row++) {
    let rowCells = [<div key={`letter-${letters[row]}`} className="cell letter no-border">{letters[row]}</div>]; // Celda de letra sin borde
      for (let col = 0; col < 10; col++) {
        rowCells.push(
          <Cell
            key={`${row}-${col}`}
            isShot={isCellShot(row, col)}
            onClick={() => handleCellClick(row, col)}
          />
        );
      }
      board.push(<div key={row} className="board-row">{rowCells}</div>);
    }
    return board;
  };

  return (
    <div className="board">
      {renderBoard()}
    </div>
  );
};

export default ShootBoard;