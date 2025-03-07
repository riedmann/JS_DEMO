import React from "react";
import TodoList from "./TodoList";

type Props = {};

export default function page({}: Props) {
  console.log("page");

  return (
    <div>
      <TodoList />
    </div>
  );
}
