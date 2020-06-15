function add(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), Math.random() * 10 * 1000);
  });
}

function print(input) {
    console.log(input);
}

add(1, 3).then(result => print(result));
add(10, 30).then(print);

console.log("Processing ....");
