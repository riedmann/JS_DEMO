let x: number = 7;
let a: number = 8;

if (x == a) {
  console.log("true");
}

function getHeading(person: Person): string {
  return "Hallo " + person.firstname + " " + person.lastname + "!";
}

interface Person {
  firstname: string;
  lastname: string;
  age?: number;
}

const p = { firstname: "Hans", lastname: "MÜlelr" };
getHeading(p);

type WindowStates = 2 | "closed" | "minimized";

let state: WindowStates = 2;
