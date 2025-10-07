let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let operation = prompt("Choose operation: add, sub, mul, div, mod");

let result;

switch(operation) {
  case "add":
    result = a + b;
    break;
  case "sub":
    result = a - b;
    break;
  case "mul":
    result = a * b;
    break;
  case "div":
    result = b !== 0 ? a / b : "Error: Divide by 0";
    break;
  case "mod":
    result = b !== 0 ? a % b : "Error: Mod by 0";
    break;
  default:
    result = "Invalid operation!";
}

alert("Result: " + result);
console.log("You entered:", a, b, "Operation:", operation, "=> Result:", result);
