function mult(a, b) {
  return a * b;
}

let iter = 0;
console.log('До цикла', iter);

while (iter < 10) { // true тогда выполняем
  console.log(iter);

  iter ++;
}

console.log('После цикла',  iter);
