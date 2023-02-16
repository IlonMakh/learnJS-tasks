let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let top = 0;
  let topName = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (top < salary) {
      top = salary;
      topName = name;
    }
  }

  return topName;
}
