import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

export const RoutesCompo = () => {
  return (
    <div className='px-20 py-4'>
        <Routes>
            <Route exact path='/' element={ <Navigate to='/search' replace /> } />
            <Route exact path='/search' element={ <Results /> } />
            <Route exact path='/image' element={ <Results /> } />
            <Route exact path='/news' element={ <Results /> } />
            <Route exact path='/videos' element={ <Results /> } />
        </Routes>
    </div>
  )
}
