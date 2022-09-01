const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is yummy',
    user_id: 1,
    potluck_id: 1
  },
  {
    comment_text: 'This is delicious.',
    user_id: 2,
    potluck_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;