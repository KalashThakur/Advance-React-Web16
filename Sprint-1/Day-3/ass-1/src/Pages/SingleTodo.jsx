import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

export const SingleTodo = () => {
    const todos = useSelector((state) => state.todos);
    const {id} = useParams();

    const [currentTodo] = useState(() => {
        return todos.find((item) => item.id === Number(id)) || {}
    })

  return (
    <div>
        <h3> {currentTodo?.title} </h3>
    </div>
  )
}
