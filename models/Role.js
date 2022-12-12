const { BOOLEAN } = require("sequelize");
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Role extends Model { };

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        role_type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        role_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
                unique: false
            }
        },
        company_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "company",
                key: "id",
                unique: false
            }
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "role",
  }
)

module.exports = Role