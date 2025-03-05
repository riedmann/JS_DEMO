const person = { name: "hans" };

person.name = "sepp";
person = { name: "suzsi" };
console.log(person.name);

//

function doIt() {
  if (true) {
    const a = 5;
    if (true) {
      console.log(a);
    }
  }
  //console.log("out" + a);
}

doIt();
//console.log(a);
