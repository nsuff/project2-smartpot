const User = require('./User');
const UserPotluck = require('./UserPotluck');
const Potluck = require('./Potluck');
const Food = require('./Food');
const Comment = require('./Comment');

// create associations
User.hasMany(Potluck, {
  foreignKey: 'host_id'
});

Potluck.belongsTo(User, {
  foreignKey: 'host_id'
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
  foreignKey: 'host_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Potluck, {
  foreignKey: 'host_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Potluck.hasMany(Comment, {
  foreignKey: 'potluck_id',
  onDelete: 'SET NULL'
})



module.exports = { User, UserPotluck, Potluck, Food, Comment };
