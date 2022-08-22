const { Food } = require('../models');

const fooddata = [
  {
    created_at: 'August 18, 2022 09:00:00',
    updated_at: 'August 19, 2022 11:00:00',
    user_id: 2,
    type_id: 2,
    name: 'Mac and Cheese',
    description: 'macaroni noodles with cheese'
  },
  {
    created_at: 'August 3, 2022 12:30:00',
    updated_at: 'August 3, 2022 12:30:00',
    user_id: 1,
    type_id: 3,
    name: 'Apple Pie',
    description: 'pie'
  },
];

const seedFood = () => Food.bulkCreate(fooddata);

module.exports = seedFood;
