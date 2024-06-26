import React from 'react';
import { useDrop } from 'react-dnd';

const Tile = ({ onDrop,children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ship',
    drop: (item) => onDrop(item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className='w-[50px] h-[50px] border-[0.5px] border-white'
      style={{ backgroundColor: isOver ? 'gray' : 'transparent' }}
    >{children}</div>
  );
};

export default Tile;
