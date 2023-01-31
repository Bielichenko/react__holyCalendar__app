/* eslint-disable no-console */

export function getTimeString(time: any) {
  console.log(time, 'time');

  const hour = time.$H;
  const minutes = time.$m;

  return `${hour}:${minutes}`;
}
