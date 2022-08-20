const User = require('./User');
const UserPotluck = require('./UserPotluck');
const Potluck = require('./Potluck');


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


module.exports = { User, UserPotluck, Potluck };
