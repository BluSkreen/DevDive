const seedCompanies = require("./companyData");
const seedJobs = require("./jobData");
const seedTags = require("./tagData");
const seedJobTags = require("./jobTagData");
const seedUsers = require("./userData");
const seedRoles = require("./roleData");

const sequelize = require('../config/connection');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCompanies();
  console.log("\n----- COMPANIES SEEDED -----\n");

  await seedJobs();
  console.log("\n----- JOBS SEEDED -----\n");

  await seedTags();
  console.log("\n----- TAGS SEEDED -----\n");

  await seedJobTags();
  console.log("\n----- JOB_TAGS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedRoles();
  console.log("\n----- ROLES SEEDED -----\n");

  process.exit(0);
};

seedDatabase();
