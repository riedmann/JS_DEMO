import React from "react";

type Props = { name: string };

export default function TodoItem({ name }: Props) {
  return <div className="p-4 shadow">{name}</div>;
}
