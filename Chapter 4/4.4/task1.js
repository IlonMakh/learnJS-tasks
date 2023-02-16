function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

// Результатом будет ошибка, так как this в данном случае равен undefined
