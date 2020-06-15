'use strict'
var a = 1; // Global

function sayHi() {
    let a = 5
    a++;
    console.log(a);
}

sayHi();
console.log(a);