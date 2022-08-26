const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'Testing',
        email: 'testing@testing.com',
        password: 'Testing123'
    },
    {
        username: 'TestUser',
        email: 'user@user.org',
        password: 'TestPassword'
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;