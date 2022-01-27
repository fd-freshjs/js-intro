function min(num1, num2) {
  let bool = num1 <= num2;

  if (bool) {
    return num1;
  } else {
    return num2;
  }
}

let result = min(-5, 4);

console.log(result);




function minV2 (num1, num2) {
  const result = Math.min(num1, num2);

  return result
}

const res = minV2 (-5, 4)

console.log(res)
