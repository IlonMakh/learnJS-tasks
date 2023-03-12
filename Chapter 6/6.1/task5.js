let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

//с использованием цикла

function printListReverse(list) {
  let array = [];
  let copy = list;

  while (copy) {
    array.push(copy.value);
    copy = copy.next;
  }

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

//с рекурсией

function printListReverse2(list) {
  if (list.next) {
    printListReverse2(list.next);
  }

  console.log(list.value);
}
