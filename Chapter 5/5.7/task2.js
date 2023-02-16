let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  arr.forEach((item) => {
    let key = item.toLowerCase().split("").sort().join("");
    map.set(key, item);
  });
  return Array.from(map.values());
}

alert(aclean(arr));
