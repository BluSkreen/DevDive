const { BOOLEAN } = require("sequelize");
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Job_tag extends Model {}

Job_tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
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
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "job_tag",
  }
);

module.exports = Job_tag;
