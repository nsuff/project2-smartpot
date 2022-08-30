const { Potluck } = require('../models');

const potluckdata = [
    {
        name: 'Cinco de mayo',
        description: "it's a day to observe what it means to be Mexican. And observe it through good food, parades, speeches, and other festivities. Now we can safely clink our Cinco de Mayo themed cocktails in a toast to Mexican-American culture.",
        startDateTime: '2023-05-04 15:00',
        endDateTime: '2023-05-04 18:00',
        host_id: 1
    }
]

const seedPotluck = () => Potluck.bulkCreate(potluckdata);

module.exports = seedPotluck;