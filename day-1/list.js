const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter( n => n%2 === 0 );
console.log(even);
console.log(numbers.reduce( (s, p) => s + p));
console.log(numbers.map( p => p*10));

const sum =numbers
  .filter( n => n%2 === 0 )
  .map( p => p*10)
  .reduce( (s, p) => s + p);
console.log(">>>>"+ sum);

// for (let index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);
// }

numbers.forEach(n => console.log("=>"+ n));

for (let key in numbers) {
    console.log(key, numbers[key]);
}

for (let value of numbers) {
    console.log(value);
}

const product = {
    id: 1,
    name: "Beer"
}

for(const key in product) {
    console.log(key, product[key]);
}
