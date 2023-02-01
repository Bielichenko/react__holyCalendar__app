export function getCurrentTime() {
  const currentTime = JSON.stringify(new Date()).slice(0, 20);

  return currentTime;
}
