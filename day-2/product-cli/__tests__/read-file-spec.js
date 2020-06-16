"use strict";
const fs = require("fs");
const productService = require("../src/product-service");

test("Write file wittht mock file system module", async () => {
  jest.restoreAllMocks();
  let callback;
  jest.spyOn(fs, "writeFile").mockImplementation((path, data, cb) => {
    callback = cb;
  });
  productService.add("temp", 111);
  expect(fs.writeFile).toBeCalledTimes(1);
});

test("Add product", async () => {
    jest.restoreAllMocks();
    productService.add("temp", 111);
  });
