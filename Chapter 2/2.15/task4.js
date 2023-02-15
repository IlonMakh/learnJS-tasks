function pow(x, n) {
  return x ** n;
}

let x = prompt("Введите число");
let n = prompt("Введите степень, в которую хотите возвести число");

if (n < 1) {
  alert("Нужно целое число, функция не сработает!");
} else {
  alert(pow(x, n));
}
