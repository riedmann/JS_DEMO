const cars = [
  {
    name: "Super Car",
    type: "BMW X3",
    color: "green",
    motor: {
      serialNumber: 1234,
      hp: 200,
    },
  },
  {
    name: "Speedster",
    type: "Audi R8",
    color: "red",
    motor: {
      serialNumber: 5678,
      hp: 550,
    },
  },
  {
    name: "Eco Drive",
    type: "Toyota Prius",
    color: "blue",
    motor: {
      serialNumber: 91011,
      hp: 121,
    },
  },
  {
    name: "Luxury Cruiser",
    type: "Mercedes-Benz S-Class",
    color: "black",
    motor: {
      serialNumber: 121314,
      hp: 450,
    },
  },
  {
    name: "Offroad Beast",
    type: "Jeep Wrangler",
    color: "orange",
    motor: {
      serialNumber: 151617,
      hp: 285,
    },
  },
];

for (i = 0; i < cars.length; i++) {
  console.log(cars[i].name);
}

console.log(cars.map((car) => "<div>" + car.name + "</div>"));
