function getDateAgo(date, days) {
  const dateTimestamp = Date.parse(date) / 1000;
  const daysInSeconds = days * 24 * 3600;
  return new Date((dateTimestamp - daysInSeconds) * 1000);
}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
