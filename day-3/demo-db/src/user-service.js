// Database connection
const db = require("./db");
const uuid = require("uuid");
const userModel = require("./models/user-model");
userModel.createUser(db);
// Find
userModel.User.findAll().then((users) => {
  const results = JSON.parse(JSON.stringify(users, null, 4));
  console.log(results[0]);
});

// Create a new user
// userModel.User.create({
//   id: uuid.v4(),
//   firstName: "somkiat",
//   lastName: "pui",
// }).then((user) => {
//   console.log("UserID:", user.id);
// });
