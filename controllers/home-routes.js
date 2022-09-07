const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Potluck, Comment, Food } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Potluck.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'startDate',
      'endDate',
      'user_id'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'potluck_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPotluckData => {
      const potlucks = dbPotluckData.map(potluck => potluck.get({ plain: true }));
      console.log(potlucks);

      res.render('homepage', {
        potlucks,
        sessionuser: req.session.user_id,
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
      'startDate',
      'endDate',
      'user_id'
    ],
    include: [
      {
        model: Food,
        attributes: [
          'id',
          'name',
          'description',
          'user_id',
          'potluck_id',
          'created_at'
        ],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'potluck_id', 'user_id', 'created_at'],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ]
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPotluckData => {
      if (!dbPotluckData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const potluck = dbPotluckData.get({ plain: true });
      console.log(potluck);

      res.render('dashboard', {
        potluck,
        sessionuser: req.session.user_id,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/views/potluck', (req, res) => {
  res.render('potluck', {
    sessionuser: req.session.user_id,
    loggedIn: req.session.loggedIn
  });
});

router.get('/editfood/:id', (req, res) => {
  Food.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'description',
      'user_id',
      'potluck_id'
    ],
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      }
    ]
  })
    .then(dbFoodData => {
      if (!dbFoodData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const food = dbFoodData.get({ plain: true });
      console.log(food);

      res.render('editfood', {
        food,
        sessionuser: req.session.user_id,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/deletecomment/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'comment_text',
      'user_id',
      'potluck_id'
    ],
    include: [
      {
        model: Potluck,
        attributes: ['id']
      }
    ]
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const comment = dbCommentData.get({ plain: true });
      console.log(comment);

      res.render('deletecomment', {
        comment,
        sessionuser: req.session.user_id,
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

module.exports = router;
