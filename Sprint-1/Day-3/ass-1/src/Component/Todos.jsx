import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTodoError, getTodoRequest, getTodoSuccesst } from '../Redux/action';
import { TodoInput } from './TodoInput';
import { TodoLists } from './TodoLists';

export const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)

    const getTodos = () => {
        dispatch(getTodoRequest());
        // axios.get('http://localhost:3000/todos')
        axios.get("/todos")
        .then((res) => dispatch(getTodoSuccesst(res.data)))
        .catch((err) => dispatch(getTodoError()))
    }

    useEffect(() => {
      if(todos?.length === 0)
      {
        getTodos()
      }
    }, [])

    console.log(todos);

  return (
    <div>
       <TodoInput />
       <TodoLists todoLists={todos}  />
    </div>
  )
}
