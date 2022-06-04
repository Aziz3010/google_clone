import React from 'react';
import { NavLink } from 'react-router-dom';

const links= [
    {url: '/search', text: '🔎 All'},
    {url: '/image', text: '📸 Images'},
    {url: '/news', text: '📰 News'},
    {url: '/videos', text: '📺 Videos'},
];

export const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map( ({url, text}, index)=> (
            <NavLink
              className='mx-2'
              key={index}
              to={url}
            >
                {text}
            </NavLink>
        ) )}
    </div>
  )
}
