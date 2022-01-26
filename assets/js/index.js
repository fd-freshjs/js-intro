console.log("global");

let glob = "glob";

function sayYourAge() {
  // definition
  const num = prompt("Введите ваш возраст");

  console.log("outer func");

  return num;
}

// const result = sayYourAge();

// console.log(result);

/////////////////////////////

const a = prompt("Введите сторону a трапеции");
const b = prompt("Введите сторону b трапеции");
const ha = prompt("Введите высоту трегольника");



// typeof variable === 'number'
// isNaN(variable) -> isNaN(Number(variable))
// <, >, <=, >=

function trapecArea(numa, numb, numh) {
  if (isNaN(numa) || isNaN(numb) || isNaN(numh)) {
    return null;
  }

  const result = ((numa + numb) / 2) * numh;

  return result;
}







const result = trapecArea(a, b, ha);

console.log(result);

// создать функцию для расчета площади трапеции,
// принимать числа как параметры
