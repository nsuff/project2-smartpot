const User = require('./User');
const UserPotluck = require('./UserPotluck');
const Potluck = require('./Potluck');
const Food = require('./Food');
const FoodType = require('./FoodType');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Potluck.hasMany(Post, {
  foreignKey: 'potluck_id'
});

Post.belongsTo(Potluck, {
  foreignKey: 'potluck_id'
});

User.belongsToMany(Potluck, {
  through: UserPotluck,
  as: 'potluck_theme',
  foreignKey: 'user_id',
  otherKey: 'potluck_id'
});

Potluck.belongsToMany(User, {
  through: UserPotluck,
  as: 'potluck_theme',
  foreignKey: 'potluck_id',
  otherKey: 'user_id'
});

Potluck.belongsTo(User, {
  foreignKey: 'host_id'
});

User.hasMany(Potluck, {
  foreignKey: 'host_id'
});

// UserPotluck.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// UserPotluck.belongsTo(Potluck, {
//   foreignKey: 'potluck_id'
// });

// User.hasMany(UserPotluck, {
//   foreignKey: 'user_id'
// });

// Potluck.hasMany(UserPotluck, {
//   foreignKey: 'potluck_id'
// });

User.hasMany(Food, {
  foreignKey: 'user_id'
});

Food.belongsTo(User, {
  foreignKey: 'user_id'
});

Potluck.hasMany(Food, {
  foreignKey: 'potluck_id'
});

Food.belongsTo(Potluck, {
  foreignKey: 'potluck_id'
});

FoodType.hasMany(Food, {
  foreignKey: 'type_id'
});

Food.belongsTo(FoodType, {
  foreignKey: 'type_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});


module.exports = { User, UserPotluck, Potluck, Post, FoodType, Food, Comment };
