function getSecondsToTomorrow() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  const nowTimestamp = Date.parse(now) / 1000;
  const tomorrowTimestamp = Date.parse(tomorrow) / 1000;
  return tomorrowTimestamp - nowTimestamp;
}
