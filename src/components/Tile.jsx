import React from 'react';

const Tile = ({ children, id }) => {

  return (
    <div
      id={id}
      className='flex justify-center items-center w-[50px] h-[50px] border-[0.5px] border-white'
    >{children}</div>
  );
};

export default Tile;
