import React, { useState } from "react";

export const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const [newText, setNewText] = useState(props.todo.text);

  return (
    <div>
      {isEdit ? (
        <div>
          <input
            value={newText}
            onChange={(e) => {
              setNewText(e.target.value);
            }}
          ></input>
          <button
            onClick={(e) => {
              props.editTodo(props.todo.id, newText);
              setIsEdit("");
            }}
          >
            Save
          </button>
          <button
            onClick={(e) => {
              setIsEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div
          style={{
            color: props.todo.isDone ? "red" : "black",
            textDecoration: props.todo.isDone ? "line-through" : "",
          }}
        >
          <span>{props.todo.text}</span>
          <button
            onClick={(e) => {
              props.toggle(props.todo.id);
            }}
          >
            Toggle
          </button>
          <button
            onClick={(e) => {
              setIsEdit(true);
              setNewText(props.todo.text);
            }}
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              props.deleteTodo(props.todo.id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
