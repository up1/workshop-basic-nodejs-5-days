"use strict";
/**
 * const (ES6 -> default)
 * let (New style)
 * var (Old style)
 */
const a = 1;

// Array
// const numbers = ['a', 'b'];
// numbers.push(1);
// numbers.push(2)
// numbers[0] = 10
// numbers.pop();

// console.log(numbers)

// Object

const person = {
  id: 1,
  name: "somkiat",
  age: 30,
};

console.log(person.id, person.name);

const json = JSON.stringify(person);
console.log(json);

console.log(JSON.parse(json));
