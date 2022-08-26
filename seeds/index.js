const seedUsers = require('./user-seeds');
const seedPotluck = require('./potluck-seeds');
const seedFood = require('./food-seeds');
const seedFoodType = require('./foodType-seeds');
const seedPosts = require('./post-seeds');
const seedUserPotlock = require('./userPotluck-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----------------------');

  await seedUsers();
  console.log('----------------------');

  await seedPotluck();
  console.log('----------------------');

  await seedFoodType();
  console.log('----------------------');

  await seedPosts();
  console.log('----------------------');

  await seedFood();
  console.log('----------------------');

  await seedUserPotlock();
  console.log('----------------------');

  process.exit(0);
};

seedAll();
