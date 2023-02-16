const readNumber = () => {
  let num;
  
  do {
    num = prompt("Введите любое число");
  } while (!isFinite(num));

  if (num === null || num === "") return null;
  return +num;
};

readNumber();
