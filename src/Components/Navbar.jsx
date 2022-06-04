import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme}) => {
    return (
        <nav className='p-1 px-20 flex flex-wrap sm:justify-between justify-center items-cente border-b dark:border-gray-700 border-gray-200'>
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to='/'>
                    <p className='text-2xl bg-blue-500 rounded px-2 py-1 text-white dark:bg-gray-500 '>
                        Google 🔎
                    </p>
                </Link>
                <button type='button' onClick={() => {setDarkTheme(!darkTheme)}} className='text-xl bg-gray-500 dark:text-white dark:bg-white border-0 rounded-full px-2 py-1 hover:shadow-lg outline-none'>
                    { darkTheme ? "💡" : "🌙" }
                </button>
            </div>
            <Search />
        </nav>
    )
};

// stop vid at 08:11:27