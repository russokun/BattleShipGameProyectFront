import React, { useState } from 'react';

const ShootBoard = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const [hits, setHits] = useState(new Set()); // Guarda los IDs de las celdas que son "hits"
  const [misses, setMisses] = useState(new Set()); // Guarda los IDs de las celdas que son "misses"

  const handleCellClick = (cellId) => {
    // Aquí deberías implementar la lógica para determinar si es un hit o miss
    // Por ahora, vamos a marcar todos los clics como "hits" para el ejemplo
    setHits(new Set(hits).add(cellId));
    // Para "misses", deberías tener una lógica similar
  };

  const renderHeaderRow = () => (
    <div className="flex">
      <div className="w-[50px] h-[50px]"></div> {/* Espacio vacío para la esquina superior izquierda */}
      {numbers.map((number) => (
        <div key={number} className="w-[50px] h-[50px] flex justify-center items-center font-bold text-xl">
          {number}
        </div>
      ))}
    </div>
  );

  const renderBoard = () => {
    return (
      <>
        {renderHeaderRow()}
        {letters.map((letter, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            <div className="w-[50px] h-[50px] flex justify-center items-center font-bold text-xl">
              {letter}
            </div>
            {numbers.map((number) => {
              const cellId = `${letter}${number}`;
              const isHit = hits.has(cellId);
              const isMiss = misses.has(cellId);
              return (
                <div 
                  key={cellId}
                  id={cellId}
                  className={`w-[50px] h-[50px] border border-gray-800 flex justify-center items-center cursor-pointer ${isHit ? 'bg-red-500 text-white' : ''} ${isMiss ? 'bg-gray-400' : ''}`}
                  onClick={() => handleCellClick(cellId)}
                >
                  {isHit ? 'X' : ''}
                </div>
              );
            })}
          </div>
        ))}
      </>
    );
  };

  return <div className="flex flex-col items-center ">{renderBoard()}</div>;
};

export default ShootBoard;