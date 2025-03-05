let name = "John";

// Escape characters

let sentence = "<d'iv>" + name + "</div>";
console.log(sentence); // Hello, John!

// nebenn ß
let sentence2 = `<div>${name}</div>";`;
console.log(sentence2);
