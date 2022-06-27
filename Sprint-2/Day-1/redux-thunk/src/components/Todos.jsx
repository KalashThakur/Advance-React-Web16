import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo, getTodoError, getTodoRequest, getTodoSuccess } from '../Redux/action'
import { TodoInput } from './TodoInput'
import TodoLists from './TodoLists';
import axios from "axios";

export const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    

    useEffect(() => {
        if(todos?.length === 0) {
            // getTodo(dispatch);
            dispatch(getTodo)
        }
       
    }, []);

    console.log("todos", todos);

  return (
    <div>
        <h2>Todos</h2>
        <TodoInput />
        <TodoLists todoList={todos} />
    </div>
  )
}
