"use client";
import { Car } from "@/lib/types/types";
import React, { useState } from "react";

type Props = { car: Car };

export default function Card({ car }: Props) {
  const [isActive, setIsActive] = useState(false);

  console.log("acive above", isActive);

  return (
    <div
      className={`shadow p-4 hover:cursor-pointer ${
        isActive ? "bg-amber-200" : "bg-gray-200"
      }`}
      onClick={() => {
        setIsActive(!isActive);
        console.log("Is Active", isActive);
      }}
    >
      <h2 className="font-bold text-3xl">{car.name}</h2>
      <div>{car.color}</div>
      {isActive ? "active" : "inactivd"}
    </div>
  );
}
