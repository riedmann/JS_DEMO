const u = "fdajskla&s4534q2543j";

if (u.length < 3) {
  console.log("INVALID");
} else if (u.length > 20) {
  console.log("INVALID");
}

const data = u.split("");
let isValid = true;
for (let u of data) {
  if (
    !(u >= "a" && u <= "z") &&
    !(u >= "A" && u <= "Z") &&
    !(u >= "0" && u <= "9")
  ) {
    isValid = false;
    break;
  }
}

if (!isValid) {
  console.log("INVALID");
} else {
  console.log("VALID");
}

// else
