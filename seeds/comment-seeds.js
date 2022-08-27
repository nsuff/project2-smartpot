const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is yummy',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'This is delicious.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'What should we say?.',
    user_id: 3,
    post_id: 2
  },

  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;