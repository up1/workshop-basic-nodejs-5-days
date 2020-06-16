"use strict";
const fs = jest.genMockFromModule("fs");

let mockFiles = Object.create(null);
function readFile(filename) {
    return mockFiles[filename] || [];
}

fs.readFile = readFile;
module.exports = fs;


