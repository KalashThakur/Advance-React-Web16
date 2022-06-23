import React from 'react'
import { useState } from 'react'

export const TodoInput = () => {
    const [title, setTitle] = useState("")
  return (
    <div>
        <h3>Add Todo</h3>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='add something' name="" id="" />
        <button>Add</button>
    </div>
  )
}
