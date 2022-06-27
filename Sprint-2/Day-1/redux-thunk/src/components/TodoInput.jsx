import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoError, addTodoRequest, addTodoSuccesst } from "../Redux/action";
import axios from "axios";

export const TodoInput = ({ getTodos }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = { title, status: false };
    setTitle("");
    dispatch(addTodoRequest());
    axios
      .post("/todos", payload)
      .then((res) => dispatch(addTodoSuccesst(res.data)))
      .then(() => getTodos())
      .catch((err) => dispatch(addTodoError(err)));
  };

  return (
    <div>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
