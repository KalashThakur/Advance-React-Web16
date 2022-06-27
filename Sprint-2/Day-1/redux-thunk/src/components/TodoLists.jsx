import React from "react";

export const TodoLists = ({ todoLists }) => {
  return (
    <div>
      {todoLists?.map((item) => {
        return (
          <div key={item.id}>
              {item.title}
          </div>
        );
      })}
    </div>
  );
};
