export function getDataFromServer() {
  const dataFromServer = localStorage.getItem('events');
  let preparedDate;

  if (dataFromServer) {
    preparedDate = JSON.parse(dataFromServer);
  }

  if (!dataFromServer) {
    preparedDate = [];
  }

  return preparedDate;
}
