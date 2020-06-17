const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const db = require("../db");

class User extends Model {}

// Create table user in database
User.init(
  {
    // attributes
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    },
    firstName23: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName23: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db, // DB Connection
    modelName: "user_up1", // Tablename
    freezeTableName: true,
  }
);
