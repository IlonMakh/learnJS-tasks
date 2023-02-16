// вариант из задачи
it("Возводит x в степень n", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// исправленный вариант тестов
describe("Возводит x в степень n", function () {
  it("Возводит 5 в 1 степень и получает 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  it("Возводит 5 в 2 степень и получает 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("Возводит 5 в 3 степень и получает 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});
