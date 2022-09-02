const { Potluck } = require('../models');

const potluckdata = [
    {
        name: 'Cinco de mayo',
        description: "it's a day to observe what it means to be Mexican. And observe it through good food, parades, speeches, and other festivities. Now we can safely clink our Cinco de Mayo themed cocktails in a toast to Mexican-American culture.",
        startDate: '2023-05-04 15:00',
        endDate: '2023-05-04 18:00',
        host_id: 1
    },
    {
        name: 'Cinco de mayo2',
        description: "it's a day to observe what it means to be Mexican. And observe it through good food, parades, speeches, and other festivities. Now we can safely clink our Cinco de Mayo themed cocktails in a toast to Mexican-American culture.",
        startDate: '2023-05-04 15:00',
        endDate: '2023-05-04 18:00',
        host_id: 1
    }
]

const seedPotluck = () => Potluck.bulkCreate(potluckdata);

module.exports = seedPotluck;