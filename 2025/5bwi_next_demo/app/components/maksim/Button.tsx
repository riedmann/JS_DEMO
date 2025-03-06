"use client";
import React from "react";

type Props = { name: string; isActive: boolean; onClick: Function };

export default function Button({ name, isActive, onClick }: Props) {
  console.log("is Active", isActive);

  return (
    <div
      onClick={() => onClick()}
      className={`${!isActive ? "bg-gray-200" : "bg-amber-300"}`}
    >
      {name}
    </div>
  );
}
