const { UserPotluck } = require('../models');

const userpotluckdata = [
    {
        user_id: 1,
        potluck_id: 1
    }
]

const seedUserPotlock = () => UserPotluck.bulkCreate(userpotluckdata);

module.exports = seedUserPotlock;