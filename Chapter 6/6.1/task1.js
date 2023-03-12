//С использованием цикла.

const getSum = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

const getSum2 = (n) => (n === 1 ? n : n + getSum2(n - 1));

//С использованием формулы арифметической прогрессии.

const getSum3 = (n) => ((2 * 1 + (n - 1)) / 2) * n;
