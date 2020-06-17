// const yargs = require("yargs");

// ES6
import yargs from 'yargs'

const data = {
  a: 1,
  b: 2
}

// Public
function a() {
  b()
  c()
}

// Private
function b() {}
function c() {}

module.exports = a

// ES6
export default a
