require("dotenv").config();

const config = {
  database: "product_db",
  username: "user",
  password: process.env.MYPASSWORD,
  host: "10.10.99.142",
  dialect: "postgres",
};

module.exports = config;
