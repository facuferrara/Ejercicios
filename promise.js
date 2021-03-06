async function getProcessedData(url) {
  let promise = new Promise(url)

  await downloadData(url) //Espera y retorna a promise
    .catch(e => {
      let dow = await  downloadFallbackData(url)
      return dow  // returns a promise
    })
    .then(v => {
      let proc = await  processDataInWorker(v);
      return proc // returns a promise
    });
}