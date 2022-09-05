const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Potluck, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// get all potluck
router.get('/', (req, res) => {
  console.log('======================');
  Potluck.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'startDate',
      'user_id',
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
    .then(dbPotluckData => res.json(dbPotluckData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Potluck.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'description',
      'startDate',
      'user_id',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'potluck_id', 'user_id', 'created_at'],
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

router.post('/', (req, res) => {
  Potluck.create(req.body,{
    name: req.body.name,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    user_id: req.session.user_id
  })
    .then(dbPotluckData => res.json(dbPotluckData))
    .catch(err => {
      if(err.name === 'SequelizeUniqueConstraintError'){
        res.status(409).json({message: 'Potluck already exists! '});
      } else {
        console.log(err);
      res.status(500).json(err);
      }
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
    Potluck.update(
    {
      name: req.body.name
    },
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
