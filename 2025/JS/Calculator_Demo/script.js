function add(operationSign) {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let result = parseFloat(num1) + parseFloat(num2);
  if (isNaN(result)) {
    alert("Bitte zahlen eingeben!");
  } else {
    console.log(result);
    document.getElementById("output").innerHTML = result;
  }
}

function subtract() {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let result = parseFloat(num1) - parseFloat(num2);
  if (result == NaN) {
    alert("Bitte zahlen eingeben!");
  } else {
    console.log(result);
    document.getElementById("output").innerHTML = result;
  }
}
