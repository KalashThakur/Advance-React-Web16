import React from 'react'
import { TodoInput } from '../Component/TodoInput'
import { TodoLists } from '../Component/TodoList'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Home = () => {

    const isAuth = useSelector((state) => state.auth.isAuth);

    if(!isAuth) {
        return <Navigate to="/login" />
    }
  return (
    <div>
        <TodoInput />
        <TodoLists />
    </div>
  )
}
