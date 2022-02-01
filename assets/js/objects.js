
// пользователь
// имя, фамилии, телефон, дата рождения, адрес, ел почта

const userFirstname = 'Василий';
const userLastname = 'Егоров';

const userPhone = '380984637465';

const userEmail = 'mail@gmail.com';

const obj = {
  key: 1
};

let str = '1'

// обьект всегда true
/* if (obj) {
  console.log('true');
}
else {
  console.log('false');
} */


//////////////////

console.log(str);
console.log(obj);

function func (param) {
  // primitive - param имеет копию значения
  param += 5;
}
func(str) // primitive types

// тип данных обьект это ссылка на облась памяти
function func2 (param) {
  // object - непосредственно та же ссылка на память
  param.key += 5;
}
func2(obj)


console.log(str);
console.log(obj);