const User = require('./User');
const UserPotluck = require('./UserPotluck');
const Potluck = require('./Potluck');
const Food = require('./Food');
const Comment = require('./Comment');

// create associations
User.hasMany(Potluck, {
  foreignKey: 'potluck_id'
});

Potluck.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Potluck, {
  through: UserPotluck,
  // as: 'host',
  foreignKey: 'user_id',
  otherKey: 'potluck_id'
});

Potluck.belongsToMany(User, {
  through: UserPotluck,
  // as: 'host',
  foreignKey: 'potluck_id',
  otherKey: 'user_id'
});

User.hasMany(Food, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Food.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Potluck.hasMany(Food, {
  foreignKey: 'potluck_id',
  onDelete: 'SET NULL'
});

Food.belongsTo(Potluck, {
  foreignKey: 'potluck_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Potluck, {
  foreignKey: 'potluck_id',
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
