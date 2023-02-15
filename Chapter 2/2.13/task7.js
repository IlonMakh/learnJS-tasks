let n = prompt("До какого числа будем проверять?", 10);

for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (!(i % j) && j < i) {
      break;
    } else if (j === i) {
      alert(i);
    }
  }
}
