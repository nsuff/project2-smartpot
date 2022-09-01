const seedUsers = require('./user-seeds');
const seedPotluck = require('./potluck-seeds');
const seedComments = require('./comment-seeds');
const seedFood = require('./food-seeds');
const seedUserPotlock = require('./userPotluck-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
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
