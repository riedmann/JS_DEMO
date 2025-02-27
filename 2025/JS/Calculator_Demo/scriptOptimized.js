function calculate(operation) {
  let num1 = parseFloat(document.getElementById("number1").value);
  let num2 = parseFloat(document.getElementById("number2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Bitte Zahlen eingeben!");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    default:
      alert("Ungültige Operation!");
      return;
  }

  console.log(result);
  document.getElementById("output").innerHTML = result;
}
