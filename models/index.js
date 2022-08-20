const User = require('./User');
const UserPotluck = require('./UserPotluck');
const Potluck = require('./Potluck');
const Food = require('./Food');
const FoodType = require('./FoodType');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Potluck.hasMany(Post, {
  foreignKey: 'content'
});

Post.belongsTo(Potluck, {
  foreignKey: 'potluck_id'
});

User.belongsToMany(Post, {
  through: UserPotluck,
  as: 'potluck_theme',
  foreignKey: 'user_id'
});

Potluck.belongsToMany(User, {
  through: UserPotluck,
  as: 'potluck_theme',
  foreignKey: 'potluck_id'
});

UserPotluck.belongsTo(User, {
  foreignKey: 'user_id'
});

UserPotluck.belongsTo(Potluck, {
  foreignKey: 'potluck_id'
});

User.hasMany(UserPotluck, {
  foreignKey: 'user_id'
});

Potluck.hasMany(UserPotluck, {
  foreignKey: 'potluck_id'
});

User.hasMany(Food, {
  foreignKey: 'food_id'
});

Food.belongsTo(User, {
  foreignKey: 'user_id'
});

Potluck.hasMany(Food, {
  foreignKey: 'type_id'
});

Food.belongsTo(Potluck, {
  foreignKey: 'potluck_id'
});

FoodType.hasMany(Food, {
  foreignKey: 'type_id'
});

Food.belongsTo(FoodType, {
  foreignKey: 'user_id'
});


module.exports = { User, UserPotluck, Potluck, Post, FoodType, Food };
