function Calculator() {
  this.operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = (str) => {
    const array = str.split(" ");
    let a = +array[0];
    let b = +array[2];
    let operator = array[1];
    return this.operations[operator](a, b);
  };

  this.addMethod = (operator, callback) => {
    this.operations[operator] = callback;
  };
}
