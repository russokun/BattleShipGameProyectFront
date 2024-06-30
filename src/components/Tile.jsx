import React from 'react';
import { useDrop } from 'react-dnd';

const Tile = ({ children, id, onDrop, isReady }) => {
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
      className={'relative inline w-[50px] h-[50px] border-[0.5px] border-white' + (isOver ? ' bg-blue-200' : '')}
    >{children}</div>
  );
};

export default Tile;
