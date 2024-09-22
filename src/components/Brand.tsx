import React from 'react';

export default function Brand() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex gap-1 relative'>
        <span className='text-gradient'>
          Fito
        </span>
        <span className='text-gradient'>
          ai
        </span>
        <div className='absolute bottom-0 left-0 w-full h-1'></div>
      </div>
    </div>
  );
}
