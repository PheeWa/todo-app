import React from "react";
import { Todo } from "./Todo";

export const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            editTodo={props.editTodo}
            deleteTodo={props.deleteTodo}
            toggle={props.toggle}
          />
        );
      })}
    </div>
  );
};
