const seedCompanies = require("./companyData");
const seedJobs = require("./jobData");
const seedUsers = require("./userData");
const seedRoles = require("./roleData")

const sequelize = require('../config/connection');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCompanies();
  console.log("\n----- COMPANIES SEEDED -----\n");

  await seedJobs();
  console.log("\n----- JOBS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedRoles();
  console.log("\n----- ROLES SEEDED -----\n");

  process.exit(0);
};

seedDatabase();
