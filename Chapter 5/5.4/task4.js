function sumInput() {
  const array = [];
  let num;
  do {
    num = prompt("Введите число для добавления в массив");
    array.push(+num);
  } while (isFinite(num) && num !== "" && num !== null);
  const sum = array.reduce((prev, cur) => prev + cur);
  return sum;
}

alert(sumInput());
