
// пользователь
// имя, фамилии, телефон, дата рождения, адрес, ел почта


const user1 = {
  firstname: 'Василий',
  lastname: 'Егоров',
  phones: {
    home: '75123123',
    work: '3802923912'
  },
  age: 47,
  isMale: true,

  sayHello: function () {
    return 'helo'
  }
};

const user2 = {
  firstname: 'Виктор',
  lastname: 'Егоров',
  phone: '380984637465',
  age: 45,
  isMale: true,
};

console.log(user1.firstname);
console.log(user1.lastname);
console.log(user1.phones);
console.log(user1.phones.work);

let res = user1.sayHello()
console.log(res)