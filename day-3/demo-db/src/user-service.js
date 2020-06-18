// Database connection
const db = require("./db");
const Sequelize = require("sequelize");
const uuid = require("uuid");
const userModel = require("./models/user-model.js")(db, Sequelize);
// Find

async function getAll() {
  try {
    const users = await userModel.findAll();
    return users;
  } catch (error) {
    return [];
  }
}

module.exports = { getAll };

// Create a new user
// userModel.User.create({
//   id: uuid.v4(),
//   firstName: "somkiat",
//   lastName: "pui",
// }).then((user) => {
//   console.log("UserID:", user.id);
// });
