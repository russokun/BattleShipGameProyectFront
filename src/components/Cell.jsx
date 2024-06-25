import React from 'react';
import '../styles/board.css';

const Cell = ({ row, col, isShot, onClick }) => {
  const handleClick = () => {
    if (!isShot) {
      onClick(row, col);
    }
  };

  return (
    <div
      className={`cell ${isShot ? 'shot' : ''}`}
      onClick={handleClick}
    >
      {isShot ? 'X' : ''}
    </div>
  );
};

export default Cell;
