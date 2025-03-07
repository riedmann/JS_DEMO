import React from "react";

type Props = {};

export default async function page({}: Props) {
  const todos = await loadData();
  return (
    <div>
      <div>Todos</div>
      <div>
        {todos.map((todo: any) => (
          <div>{todo.title}</div>
        ))}
      </div>
    </div>
  );
}

async function loadData() {
  const data = await fetch(
    "https://5e391b0baad2220014962337.mockapi.io/swp/todos"
  );

  const json = await data.json();

  return json;
}
