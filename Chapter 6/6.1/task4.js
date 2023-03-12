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

function printList(list) {
  let copy = list;

  while (copy) {
    console.log(copy.value);
    copy = copy.next;
  }
}

//с рекурсией

function printList2(list) {
  console.log(list.value);

  if (list.next) {
    printList2(list.next);
  }
}
