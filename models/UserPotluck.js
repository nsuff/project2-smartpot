const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPotluck extends Model { }

UserPotluck.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // What needs to go here?
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        potluck_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'potluck',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userpotluck'
    }
);

module.exports = UserPotluck;