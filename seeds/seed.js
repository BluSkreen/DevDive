const sequelize = require('../config/connection');
const { User, Organization } = require('../models');

const userData = require('./userData.json');
const orgData = require('./orgData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const organization of orgData) {
    await Organization.create({
      ...organization,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
