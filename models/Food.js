const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Food extends Model {}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    potluck_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: 'potluck',
        key: 'id',
      },
    },
    created_at: {
      type: DataTypes.DATE
    },
    updated_at: {
      type: DataTypes.DATE
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    type_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: 'foodtype',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'food',
  }
);

module.exports = Food;
