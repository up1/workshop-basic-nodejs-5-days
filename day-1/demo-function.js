function add(a, b) {
  return a + b;
}

const myadd = function (a, b) {
  return a + b;
};

const arrowFn = (a, b) => {
  return a + b;
};

console.log(add(1, 2));
console.log(myadd(1, 2));
console.log(arrowFn(1, 2));
