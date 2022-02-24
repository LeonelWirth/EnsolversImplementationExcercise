const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("folder", {
    foldername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
