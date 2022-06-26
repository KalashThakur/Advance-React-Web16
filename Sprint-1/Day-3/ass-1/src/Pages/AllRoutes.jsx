import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { SingleTodo } from './SingleTodo'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo/:id' element={<SingleTodo />} />
        </Routes>
    </div>
  )
}
