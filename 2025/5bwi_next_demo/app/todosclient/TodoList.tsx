"use client";

import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

type Props = {};

export default function TodoList({}: Props) {
  const [todos, setTodos] = useState([
    { title: "putzen" },
    { title: "putzen" },
  ]);
  console.log("todolist");

  useEffect(() => {
    const loadData = () => {
      fetch("https://5e391b0baad2220014962337.mockapi.io/swp/todos")
        .then((response) => response.json())
        .then((json) => {
          setTodos(json);
        });
    };
    loadData();
  }, []);

  return (
    <div>
      {todos.map((todo: any) => (
        <TodoItem name={todo.title} />
      ))}
    </div>
  );
}
