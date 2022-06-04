import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce'; 
import { useResultContext } from '../Context/ResultContextProvider';
import { Links } from './Links'

export const Search = () => {
  const [text, setText] = useState('Egypt');
  const { setSearchTerm } = useResultContext();
  const { debounceValue } = useDebounce(text, 300);

  useEffect(()=>{
    if(debounceValue) setSearchTerm(debounceValue)
  }, [debounceValue])

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:mt-10 mt-3'>
      <input
        value={text}
        type='text'
        className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded shadow-sm outline-none p-6 text-black hover:shadow-lg'
        placeholder='Search..'
        onChange={(e) => {setText(e.target.value)}}
      />
      <Links />
    </div>
  )
}
