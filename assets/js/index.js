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





function trapecArea(numa, numb, numh) {
  let prepA = numa;
  let prepB = numb;
  let prepH = numh;

  if (typeof numa !== 'number') {
    prepA = Number(numa);
  }

  if (typeof numb !== 'number') {
    prepB = Number(numb);
  }

  if (typeof numh !== 'number') {
    prepH = Number(numh);
  }

  return ((prepA + prepB) / 2) * prepH;
}







const result = trapecArea(a, b, ha);

console.log(result);

// создать функцию для расчета площади трапеции,
// принимать числа как параметры
