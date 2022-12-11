const Sequelize = require("sequelize");
require("dotenv").config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(
    process.env.JAWS_NAME,
    process.env.JAWS_USER,
    process.env.JAWS_PASSWORD,
    {
      host: process.env.JAWSDB_URL,
      dialect: 'mysql',
      port: 3306
    }
  )
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
