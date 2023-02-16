let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [vasya, petya, masha];

function getAverageAge(users) {
  let sum = users.reduce((prev, cur) => prev + cur.age, 0);
  return sum / users.length;
}

alert(getAverageAge(arr));
