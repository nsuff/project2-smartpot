const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Potluck, User} = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Potluck.findAll(req.body,{
    // attributes: [
    //   'id',
    //   'post_url',
    //   'title',
    //   'created_at',
    //   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    // ],
    include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPotluckData => res.json(dbPotluckData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Potluck.findOne(req.body,{
    where: {
      id: req.params.id
    },
    // attributes: [
    //   'id',
    //   'post_url',
    //   'title',
    //   'created_at',
    //   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    // ],
    include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPotluckData => {
      if (!dbPotluckData) {
        res.status(404).json({ message: 'No Potluck found with this id' });
        return;
      }
      res.json(dbPotluckData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Potluck.create(req.body,{
    name: req.body.name,
    description: req.body.description,
    startDateTime: req.body.startDateTime,
    endDateTime: req.body.endDateTime
    // post_url: req.body.post_url,
    // user_id: req.session.user_id
  })
    .then(dbPotluckData => res.json(dbPotluckData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.put('/upvote', withAuth, (req, res) => {
//   // custom static method created in models/Post.js
//   Potluck.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
//     .then(updatedVoteData => res.json(updatedVoteData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.put('/:id', withAuth, (req, res) => {
    Potluck.update(req.body,
    // {
    //   name: req.body.name
    // },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPotluckData => {
      if (!dbPotluckData) {
        res.status(404).json({ message: 'No Potluck found with this id' });
        return;
      }
      res.json(dbPotluckData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Potluck.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPotluckData => {
      if (!dbPotluckData) {
        res.status(404).json({ message: 'No Potluck found with this id' });
        return;
      }
      res.json(dbPotluckData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
