const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db.js");

const Comments = sequelize.define(
    "Comments",
    {
      name: {
        type: DataTypes.STRING,
      },
      txt: {
        type: DataTypes.STRING,
      },
      points: {
        type: DataTypes.STRING,
      },
      for_: {
        type: DataTypes.STRING,
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
    timestamps: true
    }
  );



module.exports={Comments};