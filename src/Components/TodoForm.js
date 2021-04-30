import React, { useState } from "react";

export const TodoForm = (props) => {
  const [newTodoText, setNewTodoText] = useState("");

  return (
    <div>
      <input
        value={newTodoText}
        onChange={(e) => {
          setNewTodoText(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          setNewTodoText("");
          props.addTodo(newTodoText);
        }}
      >
        Add todo
      </button>
    </div>
  );
};
