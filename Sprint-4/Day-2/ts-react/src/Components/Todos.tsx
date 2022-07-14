import React, { useState } from 'react'
import { Header } from './Header'
import { TodosInput } from './TodosInput'

export const Todos = () => {
    const [todos, setTodos] = useState([])
    const handleAdd = () => {}

  return (
    <div>
        <Header label="Todos" />
        <TodosInput handleAdd={handleAdd} />
    </div>
  )
}
