function add(a, b) {
  return new Promise((resolve, reject) => {
    if (a < 0) {
      setTimeout(
        () => reject(new Error("A < 0 !!")),
        Math.random() * 10 * 1000
      );
    } else {
      setTimeout(() => resolve(a + b), Math.random() * 10 * 1000);
    }
  });
}
const print = (input) => console.log(input);
add(1, 3).then((result) => print(result));
add(-1, 3)
  .then((result) => print(result))
  .catch((error) => {
    console.log(error.message);
  });

console.log("Processing ....");
