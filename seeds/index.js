const seedUsers = require('./user-seeds');
const seedPotluck = require('./potluck-seeds');
const seedComments = require('./comment-seeds');
const seedFood = require('./food-seeds');
const seedUserPotlock = require('./userPotluck-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
  await sequelize.sync({ force: true });
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  console.log('----------------------');

  await seedUsers();
  console.log('----------------------');

  await seedPotluck();
  console.log('----------------------');

  await seedComments();
  console.log('--------------');

  await seedFood();
  console.log('----------------------');

  await seedUserPotlock();
  console.log('----------------------');

  process.exit(0);
};

seedAll();
