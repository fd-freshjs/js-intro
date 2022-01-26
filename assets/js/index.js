const num1 = prompt()
const operator = prompt()
const num2 = prompt()

function calculator(a, op, b) {
  if(isNaN(a) || isNaN(b)) {
    return null;
  }

  if (op !== '+' || op !== '-') {
    return null;
  }

  if (op === '+') {
    return a + b;
  }

  if (op === '-') {
    return a - b;
  }
  
  return null;
}

calculator(num1, operator, num2);

function sayHello(name) {
  return 'Hello, ' + name;
}
