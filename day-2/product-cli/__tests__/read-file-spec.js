"use strict";
const fs = require("fs");
const productService = require("../src/product-service");

test("Write file with mock file system module", async () => {
  jest.restoreAllMocks();
  let callback;
  jest.spyOn(fs, "writeFile").mockImplementation((path, data, cb) => {
    callback = cb;
  });
  productService.add("temp", 111);
  expect(fs.writeFile).toBeCalledTimes(1);
});

test("Read file with mock file system module", async () => {
  jest.restoreAllMocks();
  let callback;
  jest.spyOn(fs, "readFileSync").mockImplementation();
  productService.getAll();
  expect(fs.readFileSync).toBeCalledTimes(1);
});

test("Add product to real file system", async () => {
  jest.restoreAllMocks();
  productService.add("temp", 111);
});
