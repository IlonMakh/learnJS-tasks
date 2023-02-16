let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(users) {
  const groupUsers = {};
  users.forEach((user) => (groupUsers[user.id] = user));
  return groupUsers;
}

let usersById = groupById(users);
