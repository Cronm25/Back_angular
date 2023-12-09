const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db.js");

const Teacher = sequelize.define(
    "Teacher",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
    timestamps: false
    }
);

module.exports={Teacher};