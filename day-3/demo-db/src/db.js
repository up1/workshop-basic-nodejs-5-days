const Sequelize = require("sequelize");
const config = require("./config");

// Configuration of database
const sequelize = new Sequelize(config);

// Dev mode
sequelize.sync({ force: true });

module.exports = sequelize;
// Test connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });
