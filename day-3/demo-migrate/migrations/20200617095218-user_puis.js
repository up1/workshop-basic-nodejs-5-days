"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("User_puis", "email1", Sequelize.STRING),
      queryInterface.addColumn("User_puis", "email2", Sequelize.STRING),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("User_puis", "email1"),
      queryInterface.removeColumn("User_puis", "email2"),
    ]);
  },
};
