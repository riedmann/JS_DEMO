function doIt() {
  console.log("doIt() called");
}

const doit2 = function (name) {
  console.log("doIt2() called with name: " + name);
  return 21;
};

// arrow function
const doit3 = (name) => {
  console.log("doIt3() called with name: " + name);
  return 22;
};

const doit4 = (name) => 2;

let res1 = doit2("hanz");
let res2 = doit3("John");
let res3 = doit4("John");

console.log(res1);
console.log(res2);
console.log(res3);
