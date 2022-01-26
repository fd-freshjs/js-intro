
console.log('global');

let glob = 'glob'

function sayYourAge() {
  // definition
  const num = prompt("Введите ваш возраст");

  console.log('outer func');

  function func () {
    let innerNum = 0;

    console.log('inner func')
    console.log(glob);
    console.log(num);
    console.log(innerNum);
  }
  func()

  return num;
}

const result = sayYourAge();

console.log(result);
