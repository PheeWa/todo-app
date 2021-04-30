import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: "Dancing",
      isDone: false,
      id: Math.random(),
    },
    {
      text: "Singing",
      isDone: false,
      id: Math.random(),
    },
  ]);

  const addTodo = (typeText) => {
    const newTodo = {
      text: typeText,
      isDone: false,
      id: Math.random(),
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, newText) => {
    const savedTodo = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(savedTodo);
  };

  const deleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => {
      if (id === todo.id) {
        return false;
      }
      return true;
    });
    setTodos(updateTodo);
  };

  const toggle = (id) => {
    const doneTodo = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(doneTodo);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        toggle={toggle}
      />
    </div>
  );
};
