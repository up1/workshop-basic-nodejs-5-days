"use strict";
const fs = jest.genMockFromModule("fs");

// let mockFiles = Object.create(null);
// function readFile(filename) {
//   return mockFiles[filename] || [];
// }

function readFileSync(path) {
  return [
    {
      name: "name 1",
      price: 100.11,
    },
    {
      name: "name 2",
      price: 200.11,
    },
  ];
}

// fs.readFile = readFile;
module.exports = fs;
