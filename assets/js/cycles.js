function mult(a, b) {
  return a * b;
}

// let iter = 0;
// console.log('До цикла', iter);

/* while (iter < 10) { // true тогда выполняем
  console.log(iter);

  iter ++;
} */

// console.log('После цикла',  iter);

for (let iter = 1; iter < 10; iter++) {
  console.log('Умножение на ' + iter);

  for (let j = 1; j < 10; j++) {
    console.log(iter, j); 
  }
}


/* 

  for (let iter = 0; iter < 5; i++) {
    if (iter % 2 === 0) {
      continue;
    }

    log(iter) // 1, 3
  }  

  for (let iter = 1; iter < 5; i += 2) {

    log(iter) // 1, 3
  } 

*/

