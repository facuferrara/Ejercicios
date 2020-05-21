async function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      let dow = await  downloadFallbackData(url)
      return dow  // returns a promise
    })
    .then(v => {
      let proc = await  processDataInWorker(v);
      return proc // returns a promise
    });
}