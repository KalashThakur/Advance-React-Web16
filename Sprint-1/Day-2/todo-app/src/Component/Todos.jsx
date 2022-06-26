import React from 'react'
import { TodoInput } from './TodoInput';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';
import { getTodoError, getTodoRequest, getTodoSuccess } from '../Redux/action';

export const Todos = () => {

  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
  const isLoading = useSelector((store) => store.isLoading);
  const isError = useSelector((store) => store.isError);

  const getTodos = () => {
    dispatch(getTodoRequest());
    axios.get("http://localhost:3000/todos")
    .then((res) => dispatch(getTodoSuccess(res.data)))
    .catch((err) => dispatch(getTodoError()))
  }
  
  
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
        <h1>Todos</h1>
        <TodoInput />
        {todos.map((item) => {
          <div key={item.id}>{item.title}</div>
        })}
    </div>
  )
}
