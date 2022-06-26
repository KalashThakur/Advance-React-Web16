import React from "react";
import {useSelector} from "react-redux";

export const TodoLists = () => {
 const todos = useSelector((state) => state.app.todos);

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
