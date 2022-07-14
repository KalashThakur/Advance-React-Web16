import React, { useState } from 'react';

interface ITodosInput {
    handleAdd: () => void
}

export const TodosInput = ({handleAdd}: ITodosInput) => {
    const [text, setText] = useState("");

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }

    // const handleAdd: React. = () => {
    //     onClick(text)
    // }

  return (
    <div>
        <input type="text" value={text} onChange={changeHandler} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
