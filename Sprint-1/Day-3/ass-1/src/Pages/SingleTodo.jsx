import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { removeTodoError, removeTodoRequest, removeTodoSuccess, toggleTodoError, toggleTodoRequest, toggleTodoSuccesst } from '../Redux/action';

export const SingleTodo = () => {
    const todos = useSelector((state) => state.todos);
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [currentTodo, setCurrentTodo] = useState( {} );
    

    //toggle status
    const toggleStatus = (id, newStatus) => {
        dispatch(toggleTodoRequest());
        axios.patch(`/todos/${id}`, {status: newStatus})
        .then((res) => dispatch(toggleTodoSuccesst(res.data)))
        .catch((err) => dispatch(toggleTodoError(err)))
    }

    const removeTodo = (id) => {
      dispatch(removeTodoRequest())
      axios.delete(`/todos/${id}`)
      .then((res) => {
        dispatch(removeTodoSuccess(id));
        navigate("/")
      })
      .catch((err) => removeTodoError(err))
    }

    useEffect(() => {
        
        let currentTodo = todos.find((item) => item.id === Number(id))
        currentTodo && setCurrentTodo(currentTodo)
    }, [todos, id])

    console.log("todos", todos);

  return (
    <div>
        <h3> {currentTodo?.title} - {currentTodo?.status ? "True" : "False"} </h3>
        <button onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)}>Toggle</button>
        <button onClick={() => removeTodo(currentTodo.id)}>Remove</button>

    </div>
  )
}
