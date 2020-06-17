'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_pui = sequelize.define('User_pui', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  User_pui.associate = function(models) {
    // associations can be defined here
  };
  return User_pui;
};