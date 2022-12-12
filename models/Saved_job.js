const { BOOLEAN } = require("sequelize");
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Saved_job extends Model {}

Saved_job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: false,
      },
    },
    job_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "job",
        key: "id",
        unique: false,
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "saved_job",
  }
);

module.exports = Saved_job;
