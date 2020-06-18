const Sequelize = require("sequelize");
const db = require("../db");

const users = require("../models/user_somkiats")(db, Sequelize);

const getAll = async () => {
  return await users.findAll();
};

const addNew = async (user) => {
  return await users.create(user);
};

module.exports = { getAll, addNew };
