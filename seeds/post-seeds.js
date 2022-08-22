const { Post } = require('../models');

const postdata = [
  {
    content: 'I am allergic to nuts',
    user_id: 3,
    created_at: 'August 8, 2022 09:00:00',
    updated_at: 'August 8, 2022 9:00:00',
  },
  {
    content: 'Can someone else bring an appetizer and some plates?',
    user_id: 4,
    created_at: 'August 14, 2022 10:00:00',
    updated_at: 'August 15, 2022 14:20:00',
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
