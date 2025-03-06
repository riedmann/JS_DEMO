"use client";
import { Car } from "@/lib/types/types";
import React, { useState } from "react";
import Card from "./Card";

type Props = { cars: Car[] };

export default function CarList({ cars }: Props) {
  const [myCars, setCars] = useState(cars);
  console.log("list is repainted");

  const hanldeChange = (car: Car) => {
    console.log("car", car.name);
  };
  return (
    <div>
      <h1>Cars</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cars.map((car: Car) => (
          <Card car={car} handleChange={hanldeChange} />
        ))}
      </div>
    </div>
  );
}
