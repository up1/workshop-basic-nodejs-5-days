"use strict";

const fs = require("fs");

const add = async (name, price) => {
  const allProduct = getAll();
  const newProduct = {
    name: name,
    price: price,
  };
  allProduct.push(newProduct);
  fs.writeFile("product.json", JSON.stringify(allProduct), (error) => {
    if (error) {
      throw new Error(error.message);
    }
  });
};

const getAll = () => {
  try {
    const result = fs.readFileSync("product.json");
    return JSON.parse(result.toString());
  } catch (error) {
    return [];
  }
};

module.exports = { add, getAll };
