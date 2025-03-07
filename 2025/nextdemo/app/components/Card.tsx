"use client";
import React from "react";

type Props = {
  title: string;
  description: string;
  isActive: boolean;
};

export default function Card({ title, description, isActive }: Props) {
  const handleEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Clicked!", event);
  };

  return (
    <div
      className={`${isActive ? "bg-green-200" : "bg-gray-200"}`}
      onClick={handleEvent}
    >
      {title} - {description}
    </div>
  );
}
