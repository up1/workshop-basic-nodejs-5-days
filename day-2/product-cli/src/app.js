const yargs = require("yargs");
const productService = require("./product-service")
yargs.command({
  command: "add",
  describe: "Add a new product",
  builder: {
    name: {
      describe: "Product name",
      demandOption: true,
      type: "string",
    },
    price: {
      describe: "Product price",
      demandOption: true,
      type: "number",
      default: "1",
    },
  },
  handler(xxx) {
    console.log(xxx.name, xxx.price);
    productService.add(xxx.name, xxx.price);
  },
});

yargs.parse();
