const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("todo", {
    todo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
