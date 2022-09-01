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
    {
        username: 'ken',
        email: 'ken@gmail.com',
        password: 'password123'
    },
    {
        username: 'nino',
        email: 'n@gmail.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;