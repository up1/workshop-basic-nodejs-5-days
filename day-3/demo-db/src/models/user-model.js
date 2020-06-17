const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class User extends Model {}

// Create table user in database
function createUser(db) {
  User.init(
    {
      // attributes
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize: db, // DB Connection
      modelName: "user_up1", // Tablename
      freezeTableName: true,
    }
  );
}

module.exports = { User, createUser };
