const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Potluck, Comment, Food, FoodType, UserPotluck} = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Potluck.findAll({
    attributes: [
     'id',
     'name',
     'description',
     'startDateTime',
     'endDateTime'
    //   'post_url',
    //   'title',
    //   'created_at',
    //   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
     ],
    include: [
      // {
      //  model: Comment,
      //  attributes: ['id', 'comment_text', 'post_id', 'user_id'],
      //  include: {
      //    model: User,
      //    attributes: ['username']
      //  }
      // },
      {
        model: Post,
        attributes: [
          'id',
          'content',
          'potluck_id',
          'user_id',
          'created_at',
          'updated_at'
        ]
      },
      {
        model: User,
        attributes: ['username']
      }
      //{
      //  model: Potluck,
      //  attributes: ['name', 'description']
      //}
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(potluck => potluck.get({ plain: true }));
      console.log(posts);

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/potluck/:id', (req, res) => {
  Potluck.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'description',
      'startDateTime',
      'endDateTime'
    //   'id',
    //   'post_url',
    //   'title',
    //   'created_at',
    //   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
     ],
     include: [
       {
        model: Food,
        attributes: [
          'id',
          'potluck_id',
          'name',
          'created_at',
          'type_id',
          'description'
        ],
      },
      {
        model: Post,
        attributes: [
          'id',
          'content',
          'potluck_id',
          'user_id',
          'created_at',
          'updated_at'
        ],
        include: [
          {
            model: User,
            attributes: [ 'id', 'username']
          }
        ]
      }
      //   include: {
      //     model: User,
      //     attributes: ['username']
      //   }
      // },
    //   model: Comment,
    //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //   include: {
    //     model: User,
    //     attributes: ['username']
    //   }
    // // //   {
    // //     model: User,
    // //     attributes: ['username']
    // //   }
      ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });
      console.log(post.posts);

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




//added to post comments
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'content',
      'potluck_id',
      'user_id',
      'created_at',
      'updated_at'
      //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      // {
      //   model: Comment,
      //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      //   include: {
      //     model: User,
      //     attributes: ['username']
      //   }
      // },
      {
        model: User,
        attributes: ['username']
      },
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });
      console.log(post);

      // pass data to template
      res.render('single-post', { post });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});






module.exports = router;
