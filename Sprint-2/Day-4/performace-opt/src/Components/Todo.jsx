import React from 'react'
import { useState } from 'react'
import { TodoItems } from './TodoItems';

const initState = [
    {id: 1, status: false, title: "Task1"},
    {id: 2, status: false, title: "Task2"},
    {id: 3, status: false, title: "Task3"},
]

const Todo = () => {

    const [todos, setTodos] = useState(initState);
    const [currentTodo, setCurrentTodo] = useState("");

    const handleChange = (e) => {
        setCurrentTodo(e.target.value)
    }

    const handleTodo = () => {
        const payload = {status: false, title: todos}
        setTodos([...todos, payload]);
        setCurrentTodo("");
    }
  return (
    <div>
      <h1>Todo</h1>
      <input type="text" value={currentTodo} onChange={handleChange} />
      <button onClick={handleTodo}>ADD</button>

      {
        todos.length && 
        todos.map((item) => <TodoItems key={item.id} {...item}  />)
      }
    </div>
  )
}

export default Todo
