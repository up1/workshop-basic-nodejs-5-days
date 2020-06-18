"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_somkiats = sequelize.define(
    "user_somkiats",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {}
  );
  user_somkiats.associate = function (models) {
    // associations can be defined here
  };
  return user_somkiats;
};
