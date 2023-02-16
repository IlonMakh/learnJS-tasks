function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  const nowTimestamp = Date.parse(now) / 1000;
  const todayTimestamp = Date.parse(today) / 1000;
  return nowTimestamp - todayTimestamp;
}
