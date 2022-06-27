import React from 'react'
import { Todos } from '../components/Todos';
import {Routes, Route} from "react-router-dom";
// import { SingleTodo } from './SingleTodo';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Todos />} />
        {/* <Route path="/:id" element={<SingleTodo />} /> */}
    </Routes>
  )
}
