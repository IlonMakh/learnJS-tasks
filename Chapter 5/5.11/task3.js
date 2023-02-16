let date = new Date(2012, 0, 6);
function getLocalDay(date) {
  let day = date.getDay();
  if (day === 0) return 7;
  return day;
}
alert(getLocalDay(date));
