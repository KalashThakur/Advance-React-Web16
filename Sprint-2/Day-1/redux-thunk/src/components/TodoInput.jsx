import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodoError, addTodoRequest, addTodoSuccesst, getTodo } from '../Redux/action';

export const TodoInput = () => {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch()

    const addTodo = (payload) => {
        dispatch(addTodoRequest());
        axios.post("/todos", payload)
        .then((res) => dispatch(addTodoSuccesst(res.data)))
        .then(() => dispatch(getTodo))
        .catch((err) => dispatch(addTodoError(err)))
    }
    const handleAdd = () => {
        if(todo) {
            const payload = {title: todo, status: false}
            addTodo(payload);
            setTodo("")
        }
    }

  return (
    <div>
        <input type="text" placeholder='add something...' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
