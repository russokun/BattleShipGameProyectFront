import React from 'react';
import { useDrop } from 'react-dnd';

const Tile = ({ children, id, onDrop, isReady, isHit, isMiss }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ship',
    drop: (item) => {
      if (!isReady) {
        //Cada vez que se dropee un barco se ejecuta la función onDrop que sale del componente Tile
        onDrop(item, id); // Función que sale del componente con los parametros item y el id del Tile
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      id={id}
      className={'relative inline w-[30px] h-[30px] md:w-[50px] md:h-[50px] border-[0.5px] border-white' + (isOver ? ' bg-blue-200' : '') + (isHit ? ' bg-red-500' : '') + (isMiss ? ' bg-gray-400' : '')}
    >{children}</div>
  );
};

export default Tile;
