import React from 'react'
import { useState } from 'react'

export const TodoInput = () => {

    const [text, setText] = useState("")

    const handleAdd = () => {
        
    }

  return (
    <div>
        <input type="text" onChange={(e) => setText(e.target.value)} placeholder='add some task' />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
