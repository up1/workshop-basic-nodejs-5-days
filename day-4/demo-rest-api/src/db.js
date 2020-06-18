const Sequelize = require("sequelize");
const sequelize = new Sequelize("product_db", "user", "pass", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
