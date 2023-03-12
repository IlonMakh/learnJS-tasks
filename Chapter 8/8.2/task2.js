function User(age) {
  this.age = age;
}

let user = new User(21);
let user2 = new user.constructor(32);
