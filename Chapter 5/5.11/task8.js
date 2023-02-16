function formatDate(date) {
  const now = new Date();
  const nowTimestamp = Date.parse(now) / 1000;
  const dateTimestamp = Date.parse(date) / 1000;
  const diff = nowTimestamp - dateTimestamp;
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const dateStr = `${day}.${month}.${year} ${hours}:${minutes}`;
  if (diff <= 1) {
    return "Прямо сейчас";
  } else if (diff > 1 && diff < 60) {
    return `${diff} сек. назад`;
  } else if (diff >= 60 && diff < 3600) {
    return `${diff / 60} мин. назад`;
  } else {
    return dateStr;
  }
}

alert(formatDate(new Date(new Date() - 1)));
alert(formatDate(new Date(new Date() - 30 * 1000)));
alert(formatDate(new Date(new Date() - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date() - 86400 * 1000)));
