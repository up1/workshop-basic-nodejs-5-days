// Spread operator
// ...
const name = "somkiat";
console.log(...name);

const number1 = [1, 2];
const number2 = [3, 4];
const result = [...number1, ...number2];
console.log(result);

// Destructuring assignment
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

const datas = ["1", "2", "3", "4"];
const [d1, , d2, ...restData] = datas;
console.log(d1, d2);
console.log(restData);

const product = {
  id: 1,
  _name: "beer",
  _price: 300,
};

const { _name, _price } = product;
console.log(_name, _price);

var users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 },
];

for (let { user, age = 15 } of users) {
  console.log(user, age);
}
