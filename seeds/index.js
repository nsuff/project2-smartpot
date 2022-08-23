const sequelize = require('../config/connection');
const seedfoodtype = require('./foodtype_seeds');
const seedPosts = require('./post-seeds');
const seedFood = require('./food-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedfoodtype();

  await seedPosts();

  await seedFood();

  process.exit(0);
};

seedAll();
