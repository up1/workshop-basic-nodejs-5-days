"use strict";
const fs = require("fs");
var validator = require("validator").default;

const add = async (name, price) => {
  // Validation input
  if (!validator.isNumeric(price.toString())) {
    console.log("Price invalid");
    return;
  }

  // Get all products from file
  const allProduct = getAll();
  const newProduct = {
    name: name,
    price: price,
  };

  // Check duplication product name
  const duplicatedProduct = allProduct.find((p) => p.name === newProduct.name);
  if (duplicatedProduct) {
    console.log("Product name is duplicated");
    return;
  }

  // Add new product to file
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
