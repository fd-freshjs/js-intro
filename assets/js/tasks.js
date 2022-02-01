
for(; true; ) {
  const num = prompt(0)

  if (num === zagadanoe) {
    alert('Вы угадали')
    break;
  }
}

function sandbox(numberOfStars) {
  
  let str = 'Stars: ';
  for (let i = 1; i <= numberOfStars; i ++) {
    str += '*';
  }
  return str
}
const userInput = Number( prompt('Введите ') )

const res = sandbox(userInput);

console.log(res);