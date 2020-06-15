function callback(message) {
  console.log(message);
  done();
}

function done() {
  console.log("Done");
}

setTimeout(callback, 3000, "result");
