// напишите функцию которая вернет всегда положительную версию числа
// (модуль числа)

function modul(num) {
  if (num < 0) {
    return num * -1;
  }

  return num;
}

const moduleChisla = modul(20);

console.log(moduleChisla);
