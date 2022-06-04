import React from 'react';
import { Rings } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center'>
        <Rings type='Puff' color='#00BFFF' hieght={550} width={80} />
    </div>
  )
}
