import React from 'react';
import { useDrop } from 'react-dnd';

const Tile = ({ children, id, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ship',
    drop: (item, monitor) => {
        onDrop(item, id);
    },
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
    }),
}));

  return (
    <div
      ref={drop}
      id={id}
      className={'flex justify-center items-center w-[50px] h-[50px] border-[0.5px] border-white' + (isOver ? ' bg-blue-200' : '')}
    >{children}</div>
  );
};

export default Tile;
