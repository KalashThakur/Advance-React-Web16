import React from "react";
import { useEffect } from "react";
import { getTodoError, getTodoRequest, getTodoSuccess } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TodoInput } from "./TodoInput";
import { TodoLists } from "./TodoLists";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const getTodos = () => {
    dispatch(getTodoRequest());
    axios
      .get("/todos")
      .then((res) => dispatch(getTodoSuccess(res.data)))
      .catch((err) => dispatch(getTodoError(err)));
  };

  useEffect(() => {
    if (todos?.length === 0) {
      getTodos();
    }
  }, []);

  console.log("todos", todos);

  return (
    <div>
      <h2>Todos</h2>
      <TodoInput getTodos={getTodos} />

      <TodoLists todoLists={todos} />
    </div>
  );
};
