const { FoodType } = require('../models');

const foodtypedata = [
  {
    name: 'Appetizer',
    description: 'pre-course dishes'
  },
  {
    name: 'Main Dish',
    description: 'main course dishes'
  },
  {
      name: 'Dessert',
      description: 'after main course'
  },
];

const seedFoodType = () => FoodType.bulkCreate(foodtypedata);

module.exports = seedFoodType;
