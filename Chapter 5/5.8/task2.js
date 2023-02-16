let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const readDates = new WeakMap();
readDates.set(messages[1], new Date());
