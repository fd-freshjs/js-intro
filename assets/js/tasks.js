/* 
  Создать функцию checkMultiplicity, которая принимает два числа 
  и проверяет кратность нацело первого вторым:
checkMultiplicity(25, 5) // true
checkMultiplicity(15, 3) // true
checkMultiplicity(15, 5) // true
checkMultiplicity(15, 4) // false
*/

const checkMultiplicity = (num, divider) => {
  // return ( num % divider === 0 ? true : false );

  if (num % divider === 0) {
    return true;
  }

  return false;
};

checkMultiplicity(25, 5); // true

/* 

  Проверка возможности треугольника. Создать функцию которая принимает 
  длины треугольника; 
  функция возвращает true если треугольник возможен и false если нет
*/

function isTriangle(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return false;
  }

  if (a + b >= c) {
    return true;
  }
  return false;
}

// 1. функция которая приветствует пользователя в зависимости от полученного имени
// sayHello('Viktor') // Привет Viktor

const username = prompt('Как вас зовут?');

function sayHello(name) {
  alert("Привет " + name)
}

sayHello(username);

/* 
функция которая вернет правду если полученная параметр строка не пустая
isNotEmpty('') false
isNotEmpty('abc') true
isNotEmpty(' ') true
*/

function isNotEmpty(str) {
  if (str !== "") {
    return true;
  }
  return false;
}

isNotEmpty(' ') // true

// 2. функция которая вернет правду если полученная параметр строка не пустая
// isNotEmpty('') // false
// isNotEmpty('abc') // true
// isNotEmpty(' ') // true

// 3. функция которая принимает параметры цену продукта и кол-во, возвращает общую сумму заказа
// calcFullPrice(24, 10) // 240

// 4. функция которая принимает параметры сумму заказа и кол-во денег в кошельке, и возвращает хватает ли денег купить эти товары
// isEnoughMoney(240, 400) // true
// isEnoughMoney(240, 140) // false

// 5. функция которая принимает параметр кол-во этажей подьезда (с 4мя квартирами на этаже) и вернет посчитаное общее колво квартир в подьезде

// 6.* функция которая проверит что полученное как параметр число находится между 0 и 10, вернет ложь если снаружи диапазона

// * функция которая вернет модуль (abs) числа (если пришло отрицательное то вернет положительное, если положительное то вернет положительное)
// * функция которая вернет случайное (random) число от 0 до 10
// * функция которая вернет квадратный корень числа (sqrt)
function sqrt(x) {
  const result = Math.sqrt(x);
  return result;
}

Math.random() * 10
0.5 * 10 // 5
0.1 * 10 // 1
0.0001 * 10 // 0.001

function solveSquareEquation(a, b, c) {

  const D = b * b - 4 * a * c;

  if (D > 0) {
    const x1 = (-b + Math.sqrt(D))/(2*a);
    const x2 = (-b - Math.sqrt(D))/(2*a);
    return 'X1=' + x1 + ';X2=' + x2;
  }

  if (D === 0) {
    const x = (-b + Math.sqrt(D))/(2*a)
    return x;
  }

  if (D < 0) {
    return NaN;
  }
}

solveSquareEquation(4, 5, 6);
solveSquareEquation(4, 5, 6);

// 'X1=4;X2=-4'

// num ** (1/2)
// * функция которая посчитает корни квадратного уравнения (формула есть в интернете)
// sqrt
// if
