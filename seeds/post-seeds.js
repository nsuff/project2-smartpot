const { Post } = require('../models');

const postdata = [
  {
    content: 'I am allergic to nuts',
    potluck_id: 1,
    user_id: 1,
    created_at: 'August 8, 2022 09:00:00',
    updated_at: 'August 8, 2022 9:00:00',
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
