const num1 = prompt();
const operator = prompt();
const num2 = prompt();

function calculator(a, op, b) {

  // ||
  if (isNaN(a)) {
    return null;
  }
  if (isNaN(b)) {
    return null;
  }

  // &&
  if (isNaN(a)) {
    if (isNaN(b)) {
      return null;
    }
  }

  switch (op) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return a / b;

    case "%":
      return a % b;

    default:
      return null;
  }
}

calculator(num1, operator, num2);

function sayHello(name) {
  return "Hello, " + name;
}

function max(a, b) {
  if (a >= b) {
    return a;
  }
  return b;
}

function min(a, b) {
  return a >= b ? b : a;
}
