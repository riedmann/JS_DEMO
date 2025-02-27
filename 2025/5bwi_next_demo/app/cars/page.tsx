import React from "react";
import Card from "../components/ui/cars/Card";
import { Car } from "@/lib/types/types";

type Props = {};

const cars: Car[] = [
  {
    name: "My super car",
    type: "BMW X3",
    color: "blue",
    motor: {
      serial: 123,
      hp: 100,
    },
  },
  {
    name: "Speedster",
    type: "Audi A6",
    color: "red",
    motor: {
      serial: 456,
      hp: 250,
    },
  },
  {
    name: "Eco Drive",
    type: "Toyota Prius",
    color: "green",
    motor: {
      serial: 789,
      hp: 120,
    },
  },
  {
    name: "Luxury Ride",
    type: "Mercedes-Benz S-Class",
    color: "black",
    motor: {
      serial: 1011,
      hp: 400,
    },
  },
  {
    name: "Offroad King",
    type: "Jeep Wrangler",
    color: "orange",
    motor: {
      serial: 1213,
      hp: 285,
    },
  },
];

console.log(cars);

export default function page({}: Props) {
  return (
    <div>
      <h1>Cars</h1>
      {cars.map((car: Car) => (
        <Card car={car} />
      ))}
    </div>
  );
}
