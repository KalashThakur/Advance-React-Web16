import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoError, addTodoRequest, addTodoSuccesst } from "../Redux/action";
import { v4 as uuid } from "uuid";

export const TodoInput = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    axios.post("/todos", payload)
    .then((res) => dispatch(addTodoSuccesst(res.data)))
    .catch((err) => dispatch(addTodoError(err)))
  }

  const handleAdd = () => {
    if(todo) {
        const payload = { title: todo, status: false}
        addTodo(payload);
        setTodo("")
    }
  }

  return (
    <div>
      <h3>Add Todo</h3>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add something here..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
